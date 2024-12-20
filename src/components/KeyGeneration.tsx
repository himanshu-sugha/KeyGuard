import React, { useState } from 'react';
import { generateKeyPair } from '../utils/crypto';
import { useKeyStore } from '../store/keyStore';
import { Key } from 'lucide-react';
import toast from 'react-hot-toast';

export default function KeyGeneration() {
  const [label, setLabel] = useState('');
  const addKeyPair = useKeyStore((state) => state.addKeyPair);

  const handleGenerate = async () => {
    if (!label.trim()) {
      toast.error('Please enter a label for the key pair');
      return;
    }

    try {
      const keyPair = await generateKeyPair();
      addKeyPair({ ...keyPair, label });
      setLabel('');
      toast.success('Key pair generated successfully');
    } catch (error) {
      toast.error('Failed to generate key pair');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Key className="w-5 h-5 mr-2" />
        Generate New Key Pair
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Key Pair Label
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g., Voting Key 2024"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Generate Key Pair
        </button>
      </div>
    </div>
  );
}