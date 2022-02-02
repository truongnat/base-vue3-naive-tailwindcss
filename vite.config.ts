import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dotenv from 'dotenv';
import { resolve } from 'path';
import ViteRequireContext from '@originjs/vite-plugin-require-context';

// https://vitejs.dev/config/
export default defineConfig(() => {
  dotenv.config();
  return {
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`,
        '@types': `${resolve(__dirname, 'src/@types/')}`,
        '@assets': `${resolve(__dirname, 'src/assets/')}`,
        '@components': `${resolve(__dirname, 'src/components/')}`,
        '@config': `${resolve(__dirname, 'src/config/')}`,
        '@constants': `${resolve(__dirname, 'src')}/constants/`,
        '@pages': `${resolve(__dirname, 'src/pages/')}`,
        '@services': `${resolve(__dirname, 'src/services/')}`,
        '@utils': `${resolve(__dirname, 'src/utils/')}`,
        '@store': `${resolve(__dirname, 'src/store/')}`,
        '@lang': `${resolve(__dirname, 'src/lang')}`,
      },
      extensions: ['.js', '.ts', '.vue', '.json'],
    },
    envDir: '.env',
    plugins: [vue(), ViteRequireContext()],
  };
});
