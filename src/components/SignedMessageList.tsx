import React from 'react';
import { useKeyStore } from '../store/keyStore'; // Custom store hook to access signed messages
import { Copy, MessageSquare } from 'lucide-react'; // Icons from Lucide for UI
import toast from 'react-hot-toast'; // For displaying toast notifications

export default function SignedMessageList() {
  // Access the signedMessages from the key store
  const { signedMessages } = useKeyStore();

  // Function to copy text to clipboard and show success message
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Title and Icon */}
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2" />
        Signed Messages
      </h2>

      {/* Display message when there are no signed messages */}
      {signedMessages.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No signed messages yet</p>
      ) : (
        <div className="space-y-4">
          {/* Loop through each signed message and display it */}
          {signedMessages.map((sm, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="space-y-2">
                {/* Display the message */}
                <div>
                  <span className="text-sm text-gray-600">Message:</span>
                  <div className="text-sm font-mono bg-gray-50 p-2 rounded mt-1 break-all">
                    {sm.message}
                  </div>
                </div>

                {/* Display the signature with copy button */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Signature:</span>
                  <button
                    onClick={() => copyToClipboard(sm.signature, 'Signature')}
                    className="p-1 hover:text-indigo-600"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm font-mono bg-gray-50 p-2 rounded break-all">
                  {sm.signature}
                </div>

                {/* Display the timestamp */}
                <div className="text-sm text-gray-500 text-right">
                  {new Date(sm.timestamp).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
