#!/usr/bin/env node

/**
 * Script to build and prepare the blog for static deployment
 * Ensures that Firebase data is fetched and incorporated into the static build
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

console.log(`${colors.blue}Starting static build process...${colors.reset}`);

// Create the out directory if it doesn't exist
const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

try {
  // Step 1: Build the project
  console.log(`${colors.blue}Building Next.js project...${colors.reset}`);
  execSync('npm run build', { stdio: 'inherit' });
  console.log(`${colors.green}✓ Build completed successfully${colors.reset}`);
  
  // Step 2: Copy robots.txt and sitemap.xml to out directory if not already there
  console.log(`${colors.blue}Checking build artifacts...${colors.reset}`);
  
  // Verify that sitemap.xml was generated
  if (!fs.existsSync(path.join(outDir, 'sitemap.xml'))) {
    console.warn(`${colors.yellow}⚠ Warning: sitemap.xml wasn't generated. Check your sitemap.ts implementation.${colors.reset}`);
  } else {
    console.log(`${colors.green}✓ sitemap.xml generated${colors.reset}`);
  }
  
  // Verify that robots.txt was generated
  if (!fs.existsSync(path.join(outDir, 'robots.txt'))) {
    console.warn(`${colors.yellow}⚠ Warning: robots.txt wasn't generated. Check your robots.ts implementation.${colors.reset}`);
  } else {
    console.log(`${colors.green}✓ robots.txt generated${colors.reset}`);
  }
  
  console.log(`${colors.green}✓ Static site generation complete!${colors.reset}`);
  console.log(`${colors.blue}The static site is available in the 'out' directory and ready for deployment.${colors.reset}`);
  
} catch (error) {
  console.error(`${colors.red}Error during static build process:${colors.reset}`, error);
  process.exit(1);
} 