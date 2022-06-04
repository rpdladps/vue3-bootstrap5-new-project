# vue3-bootstrap5-new-project

Example for a new project with vue3 + bootstrap5

## How to set your new project

- create a vue3 project 

```sh
npm init vue@latest
```

- add bootstrap packages

```sh
npm install bootstrap bootstrap-icons @popperjs/core
npm install -D sass
```

- add some aliases for importing bootstrap modules

```js
/* vite.config.js */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~bootstrap": fileURLToPath(
        new URL("./node_modules/bootstrap", import.meta.url)
      ),
      "~bootstrap-icons": fileURLToPath(
        new URL("./node_modules/bootstrap-icons", import.meta.url)
      ),
    },
  },
});
```

- add your style (see ./src/scss/bootstrap.scss)

- ...and import your style to main.js

```js
/* src/main.js */
import "./scss/bootstrap.scss";
```

## Recommended IDE Setup

[VSCode](https://code.visualstudi
o.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
