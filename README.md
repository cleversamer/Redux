# Redux - State Management Library

A State Management Library in React

## Description

A code implementation for Redux State Management in React in different ways. In this repo, I implement deifferent ways of Redux usages (Both standard and modern way of using Redux). I'm also focusing on the concept of State Management and the philisophy behind using it. Also, how to integrate it with React. In the end, I have connected React app to the store and dispatched some actions.

## Getting Started

### Dependencies

- React
- React DOM
- React Redux
- Redux
- Redux Devtools Extension
- Redux Thunk
- Redux Toolkit
- Reselect

### Installing

You need to install both Node server and React app by the following steps:

- `npm install`

- `cd backend`
  - `npm install`

### Executing Program

You need to run both Node server and React app by the following steps:

- `cd backend`

  - `npm start`

- `npm start`

### Executing Unit Tests

- Write on the terminal `npm run unit-test`

## Help

### Issue 1 - Can not fetch data from the server

This application is connected to a fake Node server with static data (that I have created), and you can take a look at it on the `backend` directory. I have definded an action in the store called `loadBugs` that is responsible to fetch the bugs from the server and store it in the global state (which is the store), and when I dispatch this action, nothing happens, also, I don't get notified with this action in `Redux DevTools` extension on my `Chrome browser`.

## Authors

- [Samer A.](https://twitter.com/ssadawi__)
