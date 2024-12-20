export interface KeyPair {
  publicKey: string;
  privateKey: string;
  createdAt: number;
  label: string;
  id: string;
}

export interface SignedMessage {
  message: string;
  signature: string;
  publicKey: string;
  timestamp: number;
}