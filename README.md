# etwp-empty-files-demo

## Issue

When using dynamic `import()` code-splitting, ETWP creates an empty (0 byte) CSS
file for the main entry point (e.g. `main.css`) even if no CSS was imported.
Additionally, if using `optimization.splitChunks.chunks: "all"` to split initial
chunks in addition to async, it creates an empty CSS file for vendors as well
(e.g. `vendors~main.css`) even if no vendor (`node_modules`) CSS was imported.
I'm assuming these two cases are the same root problem, I just don't know enough
about how it works to know for sure.

## Reproduction

##### Development (`webpack-dev-server`):

```sh
yarn dev
```

##### Production (`webpack`):

```sh
yarn build
```
