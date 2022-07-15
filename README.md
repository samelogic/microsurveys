![CI](https://github.com/samelogic/microsurveys/actions/workflows/ci.yml/badge.svg?branch=main)

# Microsurveys

## React Microsurveys

```
npm install --save @samelogic/react-microsurveys
```

# Development

This is a monorepository of all the UI code for the Samelogic Microsurvey components.

It uses NX as the build system.

Visit the [NX Documentation](https://nx.dev/) to learn more.

## Install

```sh
npm i
```

## Build

```sh
nx build
```

## Unit Tests

There are no working test in this repository at the moment but we can run those jest tests via:

```sh
nx test
```

## Storybook

We can start storybook for the main `react-microsurveys` lib by running:

```sh
nx storybook
```

You can run storybook for each individual libraries such as:

**Client**

```sh
nx storybook react-microsurveys-client
```

**Editor**

```sh
nx storybook react-microsurveys-editor
```
