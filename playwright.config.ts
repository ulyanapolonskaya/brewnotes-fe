import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.VITE_FE_URL,
    trace: 'on-first-retry',
    headless: false,
  },
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  // reporter: 'html',
  webServer: {
    command: 'npm run dev',
    port: 3000, // Adjust to match your Vite development server port
    reuseExistingServer: !process.env.CI,
  },
});
