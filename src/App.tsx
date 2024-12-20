import React from 'react';
import { useKeyStore } from './store/keyStore';
import { Toaster } from 'react-hot-toast';
import Setup from './components/Setup';
import KeyGeneration from './components/KeyGeneration';
import KeyList from './components/KeyList';
import MessageSigning from './components/MessageSigning';
// import SignedMessageList from './components/SignedMessageList';
import { ImportExport } from './components/features/ImportExport';
if (typeof global === 'undefined') {
  window.global = window;
}


export default function App() {
  const isInitialized = useKeyStore((state) => state.isInitialized);

  if (!isInitialized) {
    return (
      <>
        <Setup />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">A-MACI Key Manager</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <KeyGeneration />
            <ImportExport />
            <MessageSigning />
          </div>
          <div className="space-y-8">
            <KeyList />
            
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}