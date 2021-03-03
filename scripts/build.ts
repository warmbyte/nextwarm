import path from 'path';
import * as esbuild from 'esbuild';
import packageJson from '../package.json';

const rootPath = path.join(__dirname, '..');
const contextDir = path.join(rootPath, 'src');
const distDir = path.join(rootPath, 'dist');
const peerDeps = Object.keys(packageJson.peerDependencies);

const files = [['Tracking', 'Tracking/index.ts']];

files.forEach((file) => {
  esbuild.buildSync({
    entryPoints: [path.join(contextDir, file[1])],
    minify: true,
    format: 'cjs',
    bundle: true,
    sourcemap: 'external',
    define: {
      'process.env.NODE_ENV': "'production'",
    },
    external: peerDeps,
    outfile: path.join(rootPath, file[0] + '.js'),
  });
});

esbuild.buildSync({
  entryPoints: [path.join(contextDir, 'index.ts')],
  minify: true,
  format: 'esm',
  bundle: true,
  sourcemap: 'external',
  define: {
    'process.env.NODE_ENV': "'production'",
  },
  external: peerDeps,
  outfile: path.join(distDir, 'index.es.js'),
});

esbuild.buildSync({
  entryPoints: [path.join(contextDir, 'index.ts')],
  minify: true,
  format: 'cjs',
  bundle: true,
  sourcemap: 'external',
  define: {
    'process.env.NODE_ENV': "'production'",
  },
  external: peerDeps,
  outfile: path.join(distDir, 'index.cjs.js'),
});
