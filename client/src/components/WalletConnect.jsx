import React from 'react';
import { useWeb3 } from '../context/Web3Context';

const WalletConnect = () => {
  const { account, connectWallet } = useWeb3();

  return (
    <div>
      {account ? (
        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          {account.substring(0, 6)}...{account.substring(38)}
        </button>
      ) : (
        <button 
          onClick={connectWallet}
          className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
