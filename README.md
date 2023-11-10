# E-Commerce Fashion App

Welcome to the E-Commerce Fashion App! This React application provides a user-friendly environment for online shopping. Users can effortlessly create accounts, manage items in their cart, and securely complete payments. For a hands-on experience, check out the deployed version [here](https://sathwick-ecommerce-fashion-app.netlify.app/).

## Installation

1. Clone the repository

```
git clone https://github.com/Sathwick-Reddy-M/ecommerce-fashion.git
```

2. Navigate to the project directory

```
cd ecommerce-fashion
```

3. Install dependencies

```
npm install
```

## Features

The shopping application has the following major features

### User Registration

1. Firebase is employed to handle user authentication, ensuring a secure and reliable authentication process.
2. The application provides user-friendly sign-up options, allowing users to create accounts using their email and password, while also incorporating the convenience of Google Sign-in for a seamless registration experience.
3. Firebase authentication is employed through the steps of signing in and signing up, ensuring a secure and efficient process.

### Shopping

1. The Firestore Database is where all the different categories and the items that are currently up for sale are stored.
2. A convenient cart system is available to help users effortlessly keep track of the items they want to buy.
3. `Redux-Persist` is utilised to persist the data in the cart and user authentication states.

### Payment

1. The payments are facilitated using the Stripe API.

### Asynchronous Functions

1. Redux Thunk and Redux Saga are utilised to manage the asynchronous functions in the application
2. One of these include the retrieval of the different categories and items which are on sale from the firestore database when the Shop component mounts.

### Context API & Redux

1. At the start, the Context API is employed to update the states. Subsequently, Redux techniques are introduced to effectively manage the complex interactions and updates of categories and cart items based on user actions.

### Deployment

1. Netlify is used to deploy the React application.
2. The Netlify function is utilized to activate Stripe payments, and you can find it in the `netlify/functions` directory.

## Technologies & Concepts Utilised

React, TypeScript, React Context API, React Router, Redux, Redux-Persist, Redux Thunk, Redux Saga, Firebase, Netlify

## Project Structure

- `netlify/functions`: This directory holds the payment intent function responsible for enabling Stripe payments.

- `components`: Here, you'll find the React components that make up the shopping application.

- `routes`: Similarly, this directory contains React components but specifically for different endpoints within the application.

- `store`: Houses the Redux actions and state management files, ensuring organized and efficient data handling.

- `utils/firebase`: Contains helpful functions for data retrieval from the Firestore database and user authentication.

- `utils/reducer`: This directory holds useful functions related to Redux reducers, aiding in state management.

- `utils/stripe`: Here, you can access helpful functions for the initial setup required to enable Stripe payments.
