module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        muted: '#6B7280',
        surface: 'var(--bg)'
      }
    }
  },
  plugins: []
}
