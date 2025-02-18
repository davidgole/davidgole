/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // assetPrefix: isProd ? "/davidgole/" : "",
};

export default nextConfig;
