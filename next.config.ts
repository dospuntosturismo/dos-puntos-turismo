import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fbeykowmbjsqrqltiyno.supabase.co",
        pathname: "/storage/v1/object/public/dospuntosbucket/admin/**",
      },
    ],
  }
}

export default nextConfig;
