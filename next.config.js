module.exports = {
  webpack: (config, { isServer }) => {
    // Solución para evitar el error 'fs' en el cliente
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
