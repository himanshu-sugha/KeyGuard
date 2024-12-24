## Introduction
A-MACI Key Manager is a cutting-edge tool designed to simplify the generation, management, and usage of EdDSA key pairs for the Anonymous Minimal Anti-Collusion Infrastructure (A-MACI). Built with security, usability, and efficiency in mind, this tool empowers users to maintain complete control over their cryptographic identities in decentralized systems.

## Table of Contents
1. [Introduction](#introduction)
2. [Key Features](#key-features)
   - [Secure EdDSA Key Pair Generation](#secure-eddsa-key-pair-generation)
   - [Message Signing with EdDSA](#message-signing-with-eddsa)
   - [Encrypted Private Key Storage](#encrypted-private-key-storage)
   - [Key Labeling and Organization](#key-labeling-and-organization)
   - [Easy Key and Signature Copying](#easy-key-and-signature-copying)
   - [Import/Export Key Backup](#importexport-key-backup)
   - [Signature Verification](#signature-verification)
   - [Password-Protected Storage](#password-protected-storage)
   - [Responsive Design](#responsive-design)
3. [Why A-MACI?](#why-a-maci)
4. [How It Works](#how-it-works)
5. [Tech Stack](#tech-stack)
6. [Getting Started](#getting-started)
   - [Installation](#installation)
7. [Links](#links)

---

## Key Features

### 🔐 **Secure EdDSA Key Pair Generation**
Create cryptographically secure key pairs with ease, ensuring that your cryptographic identities are protected and ready for decentralized systems.

### ✍️ **Message Signing with EdDSA**
Sign messages for A-MACI operations directly within the tool, ensuring secure and authenticated communications.

### 🛡️ **Encrypted Private Key Storage**
AES-encrypted storage ensures your private keys are kept safe and secure, giving you peace of mind about your sensitive data.

### 🏷️ **Key Labeling and Organization**
Add custom labels to your keys for easy identification, organization, and management of multiple key pairs.

### 📋 **Easy Key and Signature Copying**
Seamlessly copy keys and signatures with a single click, simplifying the process of transferring and using keys in your decentralized operations.

### 🔄 **Import/Export Key Backup**
Safely back up your keys with encrypted export/import functionality, ensuring that your keys are stored securely and can be restored if needed.

### ✅ **Signature Verification**
Verify EdDSA signatures for secure operations, confirming the authenticity and integrity of messages in your A-MACI system.

### 🔑 **Password-Protected Storage**
Safeguard your key management with password protection, ensuring that only authorized users can access and manage your keys.

### 📱 **Responsive Design**
Optimized for use across devices—desktop, tablet, and mobile—ensuring seamless user experience wherever you go.

---


---

## Why A-MACI?

A-MACI revolutionizes decentralized governance by providing:
- **Privacy Protection**: Ensures trustless, anonymous voting using zk-SNARK/PLONK.
- **Anti-Collusion Measures**: Prevents voters from verifying their votes to eliminate collusion.
- **Operator Independence**: Voting details remain private, even from administrators.

Our tool enhances the A-MACI experience by giving users secure and intuitive control over their cryptographic keys.

---

## How It Works
1. **Generate Keys**: Create EdDSA key pairs for unique identification in A-MACI.
2. **Encrypt & Store**: Private keys are securely stored using AES encryption.
3. **Sign & Verify**: Sign necessary messages for A-MACI voting and verify signatures.
4. **Manage & Organize**: Label and organize keys, and back them up securely.

---

## Tech Stack
- **Frontend**: React + TypeScript, Tailwind CSS
- **Cryptographic Operations**: @noble/ed25519
- **State Management**: Zustand
- **Encryption**: crypto-js
- **Notifications**: React Hot Toast

---

## Links
- [Deck](https://docs.google.com/presentation/d/1EhzXlo9q5TuVsBsO6Nffw3IUmhZPKt7g/edit?usp=sharing&ouid=101046999991006708580&rtpof=true&sd=true)
- [GitHub](https://github.com/himanshu-sugha/KeyGuard)
- [Demo Video](https://youtu.be/5d3tzSc6s2I?si=-tQPTg_tDW2CzxWP)
- [Site](https://keyguarfd.netlify.app/)

---

## Getting Started

### Installation
Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/KeyGuard.git
   cd KeyGuard
   ```
2.Install dependencies:
   ```bash
  npm install
   ```
3.Start the development server:
```bash
  npm run dev
   ```

## Contact 
himanshusugha@gmail.com
