export const shortenAddress = (address) => {
  if (!address) return '';
  return `${address.substring(0, 6)}...${address.substring(38)}`;
};

export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export const calculateProgress = (raised, goal) => {
  if (goal === 0) return 0;
  return Math.min((raised / goal) * 100, 100);
};
