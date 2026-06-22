import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/Hassan_Ali_Resume_.pdf",
        destination: "/Hassan_Ali_Resume.pdf",
        permanent: true,
      },
      {
        source: "/Hassan Ali \\[Resume\\].pdf",
        destination: "/Hassan_Ali_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
