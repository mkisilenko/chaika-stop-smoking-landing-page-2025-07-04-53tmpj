/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@pinecone-database/pinecone', '@anthropic-ai/sdk'],
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Exclude generated projects from build completely
  webpack: (config) => {
    // Exclude generated-projects from compilation
    config.externals = config.externals || []
    config.externals.push({
      './generated-projects': 'commonjs ./generated-projects'
    })
    
    // Update module resolution to ignore generated-projects
    config.resolve.alias = {
      ...config.resolve.alias,
      './generated-projects': false
    }
    
    // Watch options to ignore generated-projects
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/generated-projects/**', '**/node_modules/**']
    }
    
    return config
  },
  
  // TypeScript configuration to exclude generated-projects
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration to exclude generated-projects
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'ai-services'], // Only check specific directories
  },
}

module.exports = nextConfig 