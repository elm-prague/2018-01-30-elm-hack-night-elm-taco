# `elm-taco` Presentation

by Tomáš Horáček (@heracek)

## Requirements

* [`nvm`](https://github.com/creationix/nvm) with Node.js version based on
  `./.nvmrc`
* [`yarn`](https://yarnpkg.com/)

```sh
nvm use
npm install --global yarn
```

## Install

```sh
yarn install
```

## Run Prettier on All Code

```sh
yarn prettier
```

## Run

```sh
yarn start
```

## Build & Deployment

Building the dist version of the project is as easy as running

```bash
yarn build
```

If you want to deploy the slideshow to surge, run

```bash
yarn deploy
```
