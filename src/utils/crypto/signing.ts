import * as ed from '@noble/ed25519';

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return bytes;
}

export async function signMessage(message: string, privateKey: string): Promise<string> {
  try {
    const messageUint8 = new TextEncoder().encode(message);
    const privateKeyUint8 = hexToBytes(privateKey);
    const signature = await ed.sign(messageUint8, privateKeyUint8);
    return bytesToHex(signature);
  } catch (error) {
    console.error('Error signing message:', error);
    throw new Error('Failed to sign message');
  }
}

export async function verifySignature(
  message: string,
  signature: string,
  publicKey: string
): Promise<boolean> {
  try {
    const messageUint8 = new TextEncoder().encode(message);
    const signatureUint8 = hexToBytes(signature);
    const publicKeyUint8 = hexToBytes(publicKey);
    return await ed.verify(signatureUint8, messageUint8, publicKeyUint8);
  } catch (error) {
    console.error('Error verifying signature:', error);
    return false;
  }
}