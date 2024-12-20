import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { KeyPair, SignedMessage } from '../types/key';
import { encryptData, decryptData } from '../utils/crypto';

interface KeyStore {
  keyPairs: KeyPair[];
  signedMessages: SignedMessage[];
  password: string | null;
  addKeyPair: (keyPair: Omit<KeyPair, 'id' | 'createdAt'>) => void;
  removeKeyPair: (id: string) => void;
  addSignedMessage: (message: SignedMessage) => void;
  setPassword: (password: string) => void;
  importKeyPairs: (keyPairs: KeyPair[]) => void;
  isInitialized: boolean;
}

export const useKeyStore = create<KeyStore>()(
  persist(
    (set) => ({
      keyPairs: [],
      signedMessages: [],
      password: null,
      isInitialized: false,
      addKeyPair: (keyPair) => set((state) => ({
        keyPairs: [...state.keyPairs, {
          ...keyPair,
          id: crypto.randomUUID(),
          createdAt: Date.now()
        }]
      })),
      removeKeyPair: (id) => set((state) => ({
        keyPairs: state.keyPairs.filter(kp => kp.id !== id)
      })),
      addSignedMessage: (message) => set((state) => ({
        signedMessages: [...state.signedMessages, message]
      })),
      setPassword: (password) => set({ password, isInitialized: true }),
      importKeyPairs: (importedKeyPairs) => set((state) => ({
        keyPairs: [...state.keyPairs, ...importedKeyPairs]
      })),
    }),
    {
      name: 'amaci-key-storage',
      partialize: (state) => ({
        keyPairs: state.keyPairs.map(kp => ({
          ...kp,
          privateKey: state.password ? encryptData(kp.privateKey, state.password) : kp.privateKey
        })),
        signedMessages: state.signedMessages,
        isInitialized: state.isInitialized
      }),
    }
  )
);