import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        target: 'ESNext', 
        outDir: 'dist',
        assetsDir: '.',
        sourcemap: true,
        minify: 'esbuild',
    },
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
});
