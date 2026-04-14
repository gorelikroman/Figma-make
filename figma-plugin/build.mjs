import * as esbuild from 'esbuild';
import { readFileSync } from 'fs';
import { writeFileSync, mkdirSync } from 'fs';

const watch = process.argv.includes('--watch');

// Build main plugin code
const codeConfig = {
  entryPoints: ['src/code.ts'],
  bundle: true,
  outfile: 'dist/code.js',
  target: 'es2020',
  format: 'iife',
};

// Build UI code
const uiConfig = {
  entryPoints: ['src/ui.ts'],
  bundle: true,
  outfile: 'dist/ui-bundle.js',
  target: 'es2020',
  format: 'iife',
};

mkdirSync('dist', { recursive: true });

async function build() {
  await esbuild.build(codeConfig);
  await esbuild.build(uiConfig);

  // Inline JS into HTML
  const uiHtml = readFileSync('src/ui.html', 'utf8');
  const uiJs = readFileSync('dist/ui-bundle.js', 'utf8');
  const finalHtml = uiHtml.replace('<!-- SCRIPT -->', `<script>${uiJs}</script>`);
  writeFileSync('dist/ui.html', finalHtml);

  console.log('Build complete');
}

if (watch) {
  const ctx1 = await esbuild.context(codeConfig);
  const ctx2 = await esbuild.context(uiConfig);
  await ctx1.watch();
  await ctx2.watch();
  console.log('Watching for changes...');
} else {
  await build();
}
