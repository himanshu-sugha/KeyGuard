import React, { useState, useEffect } from 'react';
import { useKeyStore } from '../store/keyStore'; // Custom store hook for accessing key pairs and managing signed messages
import { signMessage } from '../utils/crypto'; // Function to sign messages
import { MessageSquare } from 'lucide-react'; // Icon for the message
import toast from 'react-hot-toast'; // Toast notifications for success or error messages

export default function MessageSigning() {
  // State for selected key pair and message
  const [selectedKeyId, setSelectedKeyId] = useState('');
  const [message, setMessage] = useState('');

  // Accessing keyPairs and function to add signed messages from the state store
  const { keyPairs, addSignedMessage } = useKeyStore();

  // Effect hook to automatically select the first key pair if none is selected
  useEffect(() => {
    if (keyPairs.length > 0 && !selectedKeyId) {
      setSelectedKeyId(keyPairs[0].id);
    }
  }, [keyPairs, selectedKeyId]);

  // Function to handle message signing
  const handleSign = async () => {
    // Validate input
    if (!selectedKeyId || !message.trim()) {
      toast.error('Please select a key pair and enter a message');
      return;
    }

    // Find the selected key pair
    const keyPair = keyPairs.find((kp) => kp.id === selectedKeyId);
    if (!keyPair) {
      toast.error('Key pair not found');
      return;
    }

    // Sign the message with the private key of the selected key pair
    try {
      const signature = await signMessage(message, keyPair.privateKey);

      // Store the signed message
      addSignedMessage({
        message,
        signature,
        publicKey: keyPair.publicKey,
        timestamp: Date.now(),
      });

      // Reset the message input
      setMessage('');
      toast.success('Message signed successfully');
    } catch (error) {
      toast.error('Failed to sign message');
    }
  };

  // Component UI layout
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        Sign Message
      </h2>

      <div className="space-y-4">
        {/* Key Pair Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Key Pair
          </label>
          <select
            value={selectedKeyId}
            onChange={(e) => setSelectedKeyId(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a key pair</option>
            {keyPairs.map((kp) => (
              <option key={kp.id} value={kp.id}>
                {kp.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            placeholder="Enter your message here"
          />
        </div>

        {/* Sign Button */}
        <button
          onClick={handleSign}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign Message
        </button>
      </div>
    </div>
  );
}
