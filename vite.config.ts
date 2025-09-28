import { defineConfig } from 'vite';


  export default defineConfig({
    build: {
      sourcemap: true, // Set to true to generate separate sourcemap files
      // sourcemap: 'inline', // Set to 'inline' to embed sourcemaps as data URIs
      // sourcemap: 'hidden', // Set to 'hidden' to generate sourcemaps but suppress comments in bundled files
    },
    base: 'ts-test'
  }); 