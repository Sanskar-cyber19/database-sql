// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// import { config } from 'next/dist/build/templates/pages';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
        {
            protocol:'http',
            hostname:'localhost',
            port:'1337',
            pathname: '/**'
        }
        ]
    }
  }
  
  export default nextConfig;