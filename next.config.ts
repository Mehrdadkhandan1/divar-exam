import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // بهینه‌سازی و کارکرد
  staticPageGenerationTimeout: 120,
  
  // فایل‌های ایستی
  assetPrefix: process.env.ASSET_PREFIX || '',
  
  // بهینه‌سازی تصاویر
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  
  // headers و redirects برای بهتر بودن SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // تنظیمات webpack برای بهتر بودن build

};

export default nextConfig;
