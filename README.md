# Domains

Web application allowing to find [domain hacks](https://en.wikipedia.org/wiki/Domain_hack). The project is based on 6 version of [Angular framework](https://angular.io/).

## Development server

Run `npm run start` - for a dev server on `http://localhost:4200/`  
Run `npm run dev` - for a dev server on `http://0.0.0.0:4200/` (all IPv4 addresses on the local machine)  

The app will automatically reload when changing any of the source files.

## Updating TLD list

Run `npm run download-tld-list` to download the latest [TLD list](https://tld-list.com/download).

## Build

Run `npm run build` - for a production build. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
