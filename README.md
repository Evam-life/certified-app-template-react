# Evam App Template

![Evam](https://uploads-ssl.webflow.com/617bfe6eee00c8179b464cd6/617bfe6eee00c8209d464cec_evam_full-logo.svg)

This is a template providing a starting point for the development
of your Evam app. It is fully written in Typescript, using [React](https://react.dev/)+[Vite](https://vitejs.dev/).

The Evam SDK package [`@evam-life/sdk`](https://www.npmjs.com/package/@evam-life/sdk) is included and some APIs are
used for the sake of example.

See https://www.documentation.evam.life/ for up to date documentation about the Evam SDK.

## Getting started

Use `npx @evam-life/sdk create-app` script to kickstart your application project using this template:

```shell
npx @evam-life/sdk create-app
```

This will download the template and install all dependencies.

### Development

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5137](http://localhost:5137) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run format`

Reformats all code using [Prettier](https://prettier.io/).

#### `npm run lint`

Lints the codebase using [ESLint](https://eslint.org/) and reports any errors.

#### `npm run build`

Builds the app for production to the `build/` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run sideload`

Sideloads your app to all connected Android devices.
