# ⚡ EnergyPeer - Decentralized Energy Marketplace (Frontend)

Welcome to **EnergyPeer**, a decentralized energy marketplace that allows users to mint, buy, and view NFTs representing energy assets. This is the **frontend** for the platform, built using React, TailwindCSS, and Web3 technologies.

---

## 🚀 Features

- 🔐 **User Authentication** – Login and Sign Up screens  
- 🔌 **Wallet Connection** – Connect your Ethereum wallet (e.g., MetaMask)  
- 🌐 **Marketplace** – Browse available Energy NFTs for purchase  
- ⚒️ **Create NFT** – Mint new NFTs by uploading energy data (e.g., kWh, location, source)  
- 📦 **Purchases** – View all NFTs purchased by the user  
- 📊 **Data** – Visual insights from the energy trading platform  

---

## 🛠 Tech Stack

- **Frontend:** React, React Router  
- **Styling:** Tailwind CSS  
- **Wallet Interaction:** Web3 via `window.ethereum`  
- **State Management:** React Context API  

---

## 📁 Folder Structure

src/ ├── components/ # Reusable components (e.g., Header) ├── pages/ # Page-level components (Marketplace, Create, etc.) ├── context/ # Wallet context (useWallet.js) ├── App.jsx # Main App with routing ├── index.js # React DOM render └── assets/ # Optional: images, icons, etc.

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/energy-marketplace-frontend.git
cd energy-marketplace-frontend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the development server
```bash
npm run dev
```
This will run the app on http://localhost:5173/ (if you're using Vite).

### To connect your wallet:

Install MetaMask

Open the site and click Connect Wallet

Allow the site to access your wallet address

### 📝 Notes
Ensure you're on the correct blockchain network when interacting with wallets.

NFT minting assumes integration with a smart contract (handled in backend or blockchain layer).

All wallet interactions use window.ethereum — no external libraries like ethers.js or wagmi yet.

### 📌 Future Improvements
Switch to ethers.js or wagmi for better wallet handling

Add notifications and transaction statuses

Improve form validations and error handling

Deploy to IPFS, Vercel, or Netlify

### 📃 License
MIT License. Feel free to fork, improve, and contribute!
