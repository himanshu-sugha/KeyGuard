import React from 'react';
import { useKeyStore } from '../store/keyStore';
import { Trash2, Copy, Key } from 'lucide-react';
import toast from 'react-hot-toast';

export default function KeyList() {
  const { keyPairs, removeKeyPair } = useKeyStore();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Key className="w-5 h-5 mr-2" />
        Your Key Pairs
      </h2>

      {keyPairs.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No key pairs generated yet</p>
      ) : (
        <div className="space-y-4">
          {keyPairs.map((keyPair) => (
            <div key={keyPair.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{keyPair.label}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(keyPair.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Public Key:</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => copyToClipboard(keyPair.publicKey, 'Public key')}
                      className="p-1 hover:text-indigo-600"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-sm font-mono bg-gray-50 p-2 rounded break-all">
                  {keyPair.publicKey}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Private Key:</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => copyToClipboard(keyPair.privateKey, 'Private key')}
                      className="p-1 hover:text-indigo-600"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-sm font-mono bg-gray-50 p-2 rounded break-all">
                  {keyPair.privateKey}
                </div>

                <button
                  onClick={() => removeKeyPair(keyPair.id)}
                  className="mt-2 flex items-center text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete Key Pair
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}