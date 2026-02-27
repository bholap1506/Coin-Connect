# 🪙 Coin-Connect - Decentralized Crowdfunding Platform

A full-stack blockchain crowdfunding dApp built with Solidity, Hardhat, React, and Node.js.

## 📁 Project Structure

```
Coin-Connect/
├── contracts/          # Solidity smart contracts
├── scripts/            # Deployment scripts
├── test/               # Contract tests
├── client/             # React frontend (Vite)
├── backend/            # Node.js Express API (optional)
├── hardhat.config.js   # Hardhat configuration
└── .env                # Environment variables
```

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MetaMask browser extension
- MongoDB (for backend)

### Installation

1. **Install root dependencies**
```bash
npm install
```

2. **Install client dependencies**
```bash
cd client
npm install
cd ..
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

### Configuration

1. **Update .env file**
```env
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY
PRIVATE_KEY=your_metamask_private_key
ETHERSCAN_API_KEY=your_etherscan_key
MONGO_URI=mongodb://localhost:27017/coin-connect
PORT=5000
```

2. **Get Alchemy API Key**
- Sign up at https://www.alchemy.com/
- Create a new app on Sepolia testnet
- Copy the API key to .env

3. **Get Test ETH**
- Visit https://sepoliafaucet.com/
- Request test ETH for your MetaMask address

## 🔨 Development

### 1. Compile Smart Contracts
```bash
npm run compile
```

### 2. Deploy to Sepolia Testnet
```bash
npm run deploy
```

Copy the deployed `CampaignFactory` address and update:
- `.env` → `FACTORY_ADDRESS=0x...`
- `client/src/config/contractConfig.js` → `FACTORY_ADDRESS`

### 3. Start Backend API (Optional)
```bash
cd backend
npm run dev
```

### 4. Start Frontend
```bash
cd client
npm run dev
```

Open http://localhost:5173

## 📝 Smart Contract Functions

### CampaignFactory
- `createCampaign(uint goal, uint duration)` - Deploy new campaign
- `getDeployedCampaigns()` - Get all campaign addresses
- `getCampaignsByOwner(address)` - Get campaigns by owner

### Crowdfunding
- `pledge()` - Contribute ETH to campaign
- `withdraw()` - Owner withdraws if goal reached
- `refund()` - Get refund if goal not reached
- `getCampaignDetails()` - View campaign info

## 🧪 Testing

```bash
npm test
```

## 🌐 Network Support

- **Local**: Hardhat Network (chainId: 1337)
- **Testnet**: Sepolia (chainId: 11155111)
- **Testnet**: Mumbai (chainId: 80001)

## 🛠️ Tech Stack

### Blockchain
- Solidity ^0.8.20
- Hardhat
- Ethers.js v6

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS

### Backend (Optional)
- Node.js
- Express
- MongoDB
- Mongoose

## 📚 Features

✅ Create crowdfunding campaigns on blockchain  
✅ Pledge ETH to campaigns  
✅ Automatic refunds if goal not reached  
✅ Owner withdrawal after goal reached  
✅ MetaMask wallet integration  
✅ Real-time campaign tracking  
✅ Factory pattern for efficient deployment  

## 🔐 Security Notes

- Never commit `.env` file
- Use testnet for development
- Audit contracts before mainnet deployment
- Keep private keys secure

## 📄 License

MIT License

## 👨‍💻 Author

Built for learning blockchain development

---

**Need Help?**
- Check Hardhat docs: https://hardhat.org/
- MetaMask setup: https://metamask.io/
- Solidity docs: https://docs.soliditylang.org/
