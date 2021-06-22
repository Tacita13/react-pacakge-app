# Package App

My Take on the Factor Technical Challenge.
A simple application that allows a user to record the information they need to build a package a manufacturer could use to build their own product.

## Tech Stack
React + Express + SQlite3

## Instructions

First clone this repository.
```bash
$ git clone https://github.com/Tacita13/react-pacakge-app.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
$ npm install # or yarn
```

Run it
```bash
$ npm start # or yarn start  (port 3000)
$ cd src/
$ node server.js # or nodemon (port 5000)
```

# DB connection
Given the time constraint I was unable to finish connecting to a db and creating the table to hold the package data via sqlite3. The creation of a new package only render a small quick message for a successful submission

# Authentication
To add user authentication to this react app we can use Auth0 using Context and Hooks

We can first integrate the application with Auth0 which will then redirect users to an Auth0 customizable login page when they need to log in. Once your users log in successfully, Auth0 redirects them back to the app, returning JSON Web Tokens (JWTs) with their authentication and user information.

Install Auth0

``` bash
npm isntall @auth0/auth0-react
```

Since we already imported the `react-dom` we can use `useHistory` with `Auth0Provider` in order to use React Router hooks

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import {Auth0ProviderHistory} from "./auth0-provider-history";

<BrowserRouter>
	<Auth0Provider>
 		<App />
	</Auth0ProviderHistory>
</BrowserRouter>
```

`auth0-provider-history` should include the following imports:

``` jsx
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
```

We would then add authentication to possible login components (login, sign-up, logout, authentication)

```jsx
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};
```

In Index.js we would add this before the return statement

```jsx
const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
```
