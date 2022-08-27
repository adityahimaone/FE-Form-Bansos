import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      root: './src',
      extensions: ['.ts', '.tsx'],
    }),
  ],
  build: {
    sourcemap: true,
  },
  // resolve: {
  //   alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  // },
});
// function __dirname(__dirname: any, arg1: string): string {
//   throw new Error('Function not implemented.');
// }
