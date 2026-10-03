import { defineConfig } from 'vite';
export default defineConfig({define:{'process.env.NODE_ENV':JSON.stringify('production')},build:{minify:true,outDir:'dist',emptyOutDir:false,lib:{entry:'src/hero.jsx',formats:['es'],fileName:()=> 'hero-app.js',cssFileName:'hero'},rollupOptions:{output:{assetFileNames:'[name][extname]'}}}});
