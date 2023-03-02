module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/redirect/page1",
        destination: "/images",
        permanent: true,
      },
    ];
  },
};
