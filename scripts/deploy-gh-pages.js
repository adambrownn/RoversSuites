// This script deploys the Vite build output to GitHub Pages using the gh-pages package.
// Add this to your package.json scripts as: "deploy": "node scripts/deploy-gh-pages.js"

import { execSync } from 'child_process';
import fs from 'fs';

// Ensure build output exists
if (!fs.existsSync('dist')) {
  console.log('No dist directory found. Building project...');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('Publishing to GitHub Pages...');
execSync('npx gh-pages -d dist', { stdio: 'inherit' });
console.log('Deployed!');
