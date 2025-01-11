---
sidebar_position: 1
---

# Get Started

Welcome to the **TapDano** project! This page will guide you through the initial steps of setting up TapDano, an open-source initiative funded by Cardano Catalyst Fund 10. TapDano leverages **NFC** (Near Field Communication) and **NFT** (Non-Fungible Token) technologies to build secure, user-friendly solutions for authenticating physical products and facilitating blockchain transactions.

---

## Overview

- **Purpose**: TapDano aims to integrate NFC wallet functionality with NFT-based authentication for products.
- **Key Technologies**:
  - **NFC** for seamless, tap-and-go interactions.
  - **NFTs** for secure proof of authenticity on the Cardano blockchain.
- **Open-Source Approach**: Encourages community involvement and transparency.

---

## Features

- **NFC Wallet Integration**  
  Streamlines the use of NFC for secure and convenient Cardano transactions.
- **Physical Product Authentication**  
  Uses NFTs to validate the legitimacy of physical items.
- **Community-Driven Development**  
  Contributions are welcome, ensuring continuous improvement and innovation.

---

## Prerequisites

1. **Operating System**: Any modern OS (Windows, macOS, Linux).
2. **Git**: Installed for cloning repositories.
3. **Node.js & npm** (optional if planning to use the SDK):
   ```bash
   node -v
   npm -v
   ```
4. **Basic Knowledge**: Familiarity with Cardano, blockchain concepts, or Java Card is helpful but not mandatory.

## Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/tapdano/tapdano.git
   ```
   This includes the main project files and documentation.

2. **Navigate to the Project**  
   ```bash
   cd tapdano
   ```

3. **Install Dependencies** (If you plan to use or test the SDK within the main repository)  
   ```bash
   npm install
   ```

4. **Explore the Sub-Projects**:
   - **Firmware**: Java Card applet providing secure, low-level interactions.
   - **SDK**: JavaScript/TypeScript package for interfacing with TapDano tags.
   - **App**: Ionic-based mobile and web application serving as a hardware wallet for Cardano.

---

## Next Steps

- **Learn More About the Firmware**: Review the [Firmware Documentation](./firmware) for details on how the Java Card applet is structured.
- **Explore the SDK**: Check out the [SDK Documentation](./sdk) to learn how to integrate TapDano features into your own apps.
- **Try the TapDano App**: Visit the [App Documentation](./app) to download and get started with the official mobile/web client.

---

## Contributing

We welcome any form of contribution:
- **Submit Pull Requests** for improvements or new features.
- **Open an Issue** to report bugs or request features.

Your input helps TapDano grow and evolve!

---

## License

This project is available under the **MIT License**. Feel free to use, modify, and distribute it as per the license terms.
