---
sidebar_position: 5
---

# User Manual

This **User Manual** provides step-by-step instructions for everyday usage of the TapDano ecosystem, from setting up NFC smartcards to managing Cardano assets via the TapDano App and SDK.

---

## Introduction

TapDano simplifies blockchain interactions by merging NFC technology with Cardano’s powerful NFT infrastructure. Whether you’re verifying a physical product or sending a Cardano transaction, TapDano ensures security and convenience.

---

## Requirements

- **TapDano-Enabled Smartcard**:
  - Pre-flashed with the TapDano Java Card Applet (firmware).
- **Device with NFC**:
  - Smartphone (Android, iOS) or NFC USB reader for desktops.
- **TapDano App** or **TapDano SDK**:
  - Use the official app for a user-friendly interface.
  - Use the SDK to integrate TapDano functionalities into custom projects.

---

## Getting Started

1. **Obtain a TapDano Smartcard**  
   - Purchase or flash your own Java Card with the TapDano firmware.
2. **Install the TapDano App** (Mobile or Web)  
   - [Download the APK](https://github.com/tapdano/app/raw/main/tapdano.apk) or access via web (if available).
3. **Optional: Set Up the SDK**  
   - Install the npm package `tapdano` for advanced integration.

---

## Typical Use Cases

1. **Read a TapDano Tag**  
   - Open the TapDano App or run `readTag()` via SDK.
   - Tap your card or connect via an NFC reader.
   - View the card’s details (version, policy ID, etc.).
2. **Mint or Restore a Tag** (`Burn Tag`)  
   - Set up a Soulbound or Extractable tag.
   - If restoring, provide a previously backed-up private key.
3. **Sign Data**  
   - For Cardano transactions or any message needing cryptographic signing.
   - Use the app’s “Sign Transaction” feature or `signData()` in the SDK.
4. **Lock & Unlock Tags**  
   - **Permanent Lock (Lock Tag)** for Soulbound keys.
   - **Temporary Lock (Pin Lock)** to secure an Extractable key behind a PIN.
5. **Set a PolicyId**  
   - Link an NFT PolicyId to the tag for soulbound NFTs.

---

## Tips & Best Practices

- **Keep Your PIN Secure**  
  - Don’t share it. Store it in a secure location.
- **Backup Extractable Keys**  
  - If using an Extractable tag, store your private key safely offline.
- **Use Soulbound Tags for Higher Security**  
  - If you don’t need extractable keys, Soulbound ensures maximum protection.
- **Stay Up to Date**  
  - Always use the latest firmware and app versions for security patches.

---

## Troubleshooting

- **Tag Not Detected**:
  - Ensure NFC is enabled on your device.
  - Try tapping the card on different areas of the phone or reader.
- **Pin Lock Issues**:
  - Double-check your PIN format (4 characters).
  - Use `pinUnlock(pin)` in the SDK or follow the in-app unlock instructions.
- **Firmware Installation Errors**:
  - Confirm Java Card environment variables are correctly set.
  - Verify you have the correct `.cap` file for the card.

---

## Additional Resources

- [Firmware Documentation](./firmware)  
  Learn how to build and install the Java Card Applet.
- [SDK Documentation](./sdk)  
  Integrate TapDano into your custom applications.
- [App Documentation](./app)  
  Discover the features of the TapDano App.

---

## Contributing

Your feedback and contributions help improve TapDano. Feel free to:
- **Open an Issue** on GitHub for questions or bug reports.
- **Submit a Pull Request** with new features or documentation changes.

---

## License

TapDano is made available under the **MIT License**. You may freely copy, modify, and distribute the software under its terms.
