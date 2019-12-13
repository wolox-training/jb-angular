# Test Angular Plink / Maquetado

This project was generated with Angular CLI version 8.3.20.

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/wolox-training/jb-angular.git
$ cd plink-frontend
$ npm install
$ ng serve
```

### configure environment file:
```sh
$ cd plink-frontend/src
$ mkdir environments
$ cd environments
$ touch environment.ts
```

minimum must have the following environment variables:

```
export const environment = {
  production: false,
  ROOT_URL: '',
  RAPID_API_HOST: '',
  RAPID_API_KEY: '',
};
```
