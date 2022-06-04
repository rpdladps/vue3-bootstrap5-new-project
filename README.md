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

```scss
/* src/scss/bootstrap.scss */
/* ... */

// Option 1
//
// Import all of Bootstrap's CSS

// @import "~bootstrap/scss/bootstrap";

// Option 2
//
// Place variable overrides first, then import just the styles you need. Note that some stylesheets are required no matter what.

// Toggle global options
$enable-gradients: true;
$enable-shadows: true;

$offcanvas-box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);

// Customize some defaults
$body-color: #333;
$body-bg: #fff;
$border-radius: .4rem;
$success: #7952b3;

// Required
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
//@import "~bootstrap/scss/maps";
@import "~bootstrap/scss/mixins";


/* ... */
```

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
