# nest-react-monorepo-template

A template starter for a monorepo with NestJS and ReactJS.

The Nest.js server will serve up the SPA React app in production.

## Technologies

- [NestJS](https://nestjs.com/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)

## Overview
This app will use Turbo Repo to allow us both develop and deploy the app as a monorepo.

Because we're using Turbo/workspaces, we can npm install packages in the root of the project and they will be available to both the server and the client.

To install packages from the root of the project we can utilize the workspaces feature that Turbo repo provides. For example we can install a new package in the api folder by running:
`npm install --workspace api <package-name>`

In the apps/client folder under vite.config.ts, we have a proxy set up to proxy all requests to /api to the Nest.js server. Because of this proxy setup, we use the /api prefix in the client to make requests to the server.

To accommodate this we also have changed the main.ts file in the server to use the /api prefix for all routes. This is done by adding:
`app.setGlobalPrefix('api')`.

To serve up the static React app in production, we use the Nest.js built-in static file server. We have installed the `@nestjs/serve-static` dependency and added:

```javascript
ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
```

to the imports array in the apps/api/src/app.module.ts file.

## Getting Started

### Download the template

```bash
git clone https://github.com/hopeVaughn/nest-react-monorepo-template.git
```

### Install dependencies

From the root of the project run:

```bash

npm install
```

This will set up the dependencies for both the server and the client. Please refer to the root package.json file to see the other scripts that are available, i.e `npm run dev`, `npm run build`, and `npm run start`.

### Run the app

You'll first want to run a build on the project by running:

```bash
npm run build
```

This will build the client and the server. After the build is complete, you can run the app by running:

```bash
npm start
```

The project will be available at <http://localhost:3000>

### Installing new dependencies from the root of the project

Because we have set up the project to use Turbo/workspaces, we can install new dependencies from the root of the project and they will be available to both the server and the client. To run the npm install command from the root of the project, you can run:

```bash
npm install --workspace <folder-name><prefix's-for-dev><package-name>
```

This should install the package in the folder you specify and add it to the package.json file in that folder.
