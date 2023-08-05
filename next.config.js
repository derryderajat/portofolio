/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["miro.medium.com", "media.licdn.com"],
  },
  async headers() {
    const headers = [];
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index",
          },
        ],
        source: "/:path*",
      });
    }
    return headers;
  },
};

module.exports = nextConfig;
