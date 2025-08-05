import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', //це потрібно для деплою на гітхаб
  basePath: '/next-js-project-test',
  reactStrictMode:true,
  env: { // тут можна перейменувати .env дані, але як  правило в цьому немає сенсу
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
  images: {
    domains: ['fakestoreapi.com']
  }
};

export default nextConfig;
