# A-MACI Key Manager

A secure key management tool for A-MACI (Anonymous Minimal Anti-Collusion Infrastructure) that allows users to generate, manage, and use EdDSA keypairs for decentralized governance.

## Features

- 🔐 Secure EdDSA key pair generation
- 📝 Message signing with EdDSA
- 🔒 Encrypted storage of private keys
- 📋 Easy key and signature copying
- 🏷️ Key labeling and organization
- 📱 Responsive design
- 💾 Import/Export functionality for key backup
- ✅ Signature verification
- 🔑 Password-protected storage

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Security Features

- Private keys are encrypted using AES before storage
- Password-protected access
- Secure key generation using cryptographically secure random numbers
- No private key exposure in URLs or logs
- Encrypted local storage for persistent data
- Import/Export functionality with encrypted private keys

## Tech Stack

- React + TypeScript
- Tailwind CSS for styling
- @noble/ed25519 for EdDSA operations
- Zustand for state management
- crypto-js for encryption
- React Hot Toast for notifications

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable UI components
│   ├── features/       # Feature-specific components
│   └── ...            # Main components
├── store/             # State management
├── types/             # TypeScript type definitions
└── utils/
    └── crypto/        # Cryptographic operations
```

## Security Best Practices

- All private keys are encrypted before storage
- Keys are never exposed in the URL or console
- Password strength requirements enforced
- Secure random number generation for keys
- Clear error handling and user feedback