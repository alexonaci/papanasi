import adapter from '@sveltejs/adapter-auto';

const config = {
  kit: {
    adapter: adapter()
  },
  package: {
    source: 'src',
    dir: 'dist'
  },
  optimizeDeps: { include: ['copy-to-clipboard', 'highlight.js'] }
};

export default config;
