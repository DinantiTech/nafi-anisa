import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ttf|woff|woff2|eot)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/fonts/',
          outputPath: 'static/fonts/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
  /* config options here */
  compress: true
};

export default nextConfig;
