import nikxPlugin from 'nikx-vite-plugin'

export default {
    build: {
        emptyOutDir: true,
        outDir: '../dist'
    },
    root: 'src',
    publicDir: '../public',
    plugins: [nikxPlugin()]
}
