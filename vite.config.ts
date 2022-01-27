import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(() => {
  dotenv.config();
  return {
    envDir: '.env',
    plugins: [vue()],
  };
});
