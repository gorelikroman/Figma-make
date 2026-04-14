import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync } from 'fs';

const watch = process.argv.includes('--watch');

mkdirSync('dist', { recursive: true });
mkdirSync('dist/icons', { recursive: true });

const contentConfig = {
  entryPoints: ['src/content.ts'],
  bundle: true,
  outfile: 'dist/content.js',
  target: 'es2020',
  format: 'iife',
};

const popupConfig = {
  entryPoints: ['src/popup.ts'],
  bundle: true,
  outfile: 'dist/popup.js',
  target: 'es2020',
  format: 'iife',
};

function copyStatic() {
  copyFileSync('manifest.json', 'dist/manifest.json');
  copyFileSync('popup.html', 'dist/popup.html');
  // Copy icons if they exist
  try { copyFileSync('icons/icon16.png', 'dist/icons/icon16.png'); } catch {}
  try { copyFileSync('icons/icon48.png', 'dist/icons/icon48.png'); } catch {}
  try { copyFileSync('icons/icon128.png', 'dist/icons/icon128.png'); } catch {}
}

if (watch) {
  const ctx1 = await esbuild.context(contentConfig);
  const ctx2 = await esbuild.context(popupConfig);
  await ctx1.watch();
  await ctx2.watch();
  copyStatic();
  console.log('Watching for changes...');
} else {
  await esbuild.build(contentConfig);
  await esbuild.build(popupConfig);
  copyStatic();
  console.log('Build complete');
}
