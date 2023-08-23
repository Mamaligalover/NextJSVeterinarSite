/** @type {import('next').NextConfig} */
const nextConfig = {

images: {
  domains:["cdn.sanity.io"],
  remotePatterns: [
    {
      protocol:"https",
      hostname: "cdn.sanity.io",
      port: '',
      pathname: '/account123/**',
    },
  ]
}
}

module.exports = nextConfig
