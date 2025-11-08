/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export mode
  images: {
    unoptimized: true, // disables Next.js image optimization
  },
  trailingSlash: true, // 👈 ensures folders contain index.html files
};

export default nextConfig;
