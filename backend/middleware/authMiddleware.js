// Optional: Authentication middleware for future use
// Currently, campaigns are managed by wallet addresses on-chain

const authMiddleware = (req, res, next) => {
  // Placeholder for JWT or wallet signature verification
  // For now, just pass through
  next();
};

module.exports = authMiddleware;
