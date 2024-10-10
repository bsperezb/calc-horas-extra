# cal-horas-extras

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Dev Container Setup

To use the dev container setup, make sure you have the following installed:

1. **Docker**: Follow the instructions on [Docker's official website](https://docs.docker.com/get-docker/) to install Docker on your machine.
2. **VS Code Remote - Containers extension**: Install the extension from [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

### Launching the Dev Container

1. Open the project in Visual Studio Code.
2. Press `F1` or `Ctrl + Shift + P` to open the command palette.
3. Type and select **Remote-Containers: Open Folder in Container...**.
4. Choose the folder of your project.
5. Wait for the container to build and launch. This process may take a few minutes on the first run as dependencies are installed.

Once inside the dev container, run the following command to start the development server:

```sh
npm run dev
```

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

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

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
