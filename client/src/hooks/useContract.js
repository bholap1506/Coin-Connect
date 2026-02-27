import { useState } from 'react';
import { ethers } from 'ethers';
import { FACTORY_ADDRESS, FACTORY_ABI } from '../config/contractConfig';

export const useContract = () => {
  const [loading, setLoading] = useState(false);

  const getFactoryContract = (signer) => {
    return new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABI, signer);
  };

  return { getFactoryContract, loading, setLoading };
};
