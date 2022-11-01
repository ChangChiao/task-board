/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? `http://localhost:3008/v1/:path*`
            : `https://task-board-backend.vercel.app/:path*`,
      },
    ];
  },
});
