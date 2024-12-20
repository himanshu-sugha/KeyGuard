import CryptoJS from 'crypto-js';
import { KeyPair, SignedMessage } from '../types/key';

// Mock Key Generation
export async function generateKeyPair(): Promise<KeyPair> {
  // Generate mock keys using CryptoJS
  const mockPrivateKey = CryptoJS.lib.WordArray.random(32).toString();
  const mockPublicKey = CryptoJS.lib.WordArray.random(32).toString();
  
  return {
    publicKey: mockPublicKey,
    privateKey: mockPrivateKey,
    label: 'mock-label',
    id: CryptoJS.lib.WordArray.random(16).toString(),
    createdAt: Date.now()
  };
}

// Mock Message Signing
export async function signMessage(message: string, privateKey: string): Promise<SignedMessage> {
  // Use HMAC SHA256 to create a mock signature
  const mockSignature = CryptoJS.HmacSHA256(message, privateKey).toString();
  
  return {
    message,
    signature: mockSignature,
    publicKey: 'mock-public-key',
    timestamp: Date.now()
  };
}

// Mock Signature Verification (always returns true for mock purposes)
export async function verifySignature(
  message: string,
  signature: string,
  publicKey: string
): Promise<boolean> {
  // For mock purposes, always return true (you can expand this later)
  return true;
}

// Mock Data Encryption
export function encryptData(data: string, password: string): string {
  return CryptoJS.AES.encrypt(data, password).toString();
}

// Mock Data Decryption
export function decryptData(encryptedData: string, password: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedData, password);
  return bytes.toString(CryptoJS.enc.Utf8);
}
