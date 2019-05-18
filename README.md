<h1 align="center">
  <a href="https://tenantly.netlify.com/">
    <!-- <img alt="Tenantly" src="" width="120" /> -->
    Tenantly
  </a>
      <h3>Take care of tedious property management tasks in one place. Be in charge of your properties, anytime, anywhere.</h3>
</h1>

[Tenantly](https://tenantly.netlify.com/) is a property management application that makes the communication and financial transactions easier between the tenant and landlord. With two distict dashboards both tenants and clients have all of the tools needed to efficiently resolve work orders and track payments.

## Team

<!-- prettier-ignore -->
| [**Lee Formento**](https://github.com/leeformento) | [**Travis Russell**](https://github.com/travis-russell) | [**Kyle Teeter**](https://github.com/kyleteeter) | [**Matthew Meitl**](https://github.com/mmeitl) | [**Victor Gordian**](https://github.com/sweetooth101) | 
|:------------:|:------------:|:-----------:|:-----------:|:-----------:|:-----------:|
| [<img src="https://avatars3.githubusercontent.com/u/39426065?s=400&v=4" width="80">](https://github.com/leeforment) | [<img src="https://avatars1.githubusercontent.com/u/35874527?s=400&v=4" width="80">](https://github.com/travis-russell) | [<img src="https://avatars1.githubusercontent.com/u/29210839?s=400&u=41de0e5b5cf70ed8d0e663fe7643baf936d2b379&v=4" width="80">](https://github.com/kyleteeter) | [<img src="https://avatars2.githubusercontent.com/u/13967366?s=400&v=4" width="80">](https://github.com/mmeitl) | [<img src="https://avatars0.githubusercontent.com/u/41352551?s=400&v=4" width="80">](https://github.com/sweetooth101) | 
| [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/leeformento) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/travis-russell) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/kyleteeter) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/mmeitl) | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/sweetooth101) | 

# Quick Start

1. Put your environment variables at `/front-end/.env` and `/back-end/.env`
2. Inside `/front-end` install all dependencies and spin up the server:
   ```
   npm install && npm start
   ```
3. Inside `/back-end` install all dependencies and start the front-end:
   ```
   npm install && npm start
   ```

Now just open [http://localhost:3000](http://localhost:3000) to visit the frontend, or query the server endpoints directly at [http://localhost:9000](http://localhost:9000).

# Resources

- [Wireframes](https://balsamiq.cloud/snv27r3/pqivtqy/r6F6C)

# Scripts

## Testing

`npm test`: When run inside the `/back-end` directory, runs all backend tests 


## Running

From the root directory:

`cd front-end && yarn start`: Runs the frontend client

`cd back-end && yarn start`: Runs the backend server

> **Note:** Make sure you delete `node_modules` directories when dependencies change between merges.

# Environment Variables

These reside in the `/front-end/.env` file, which is ignored by `git` for security reasons.

TODO: Add all required environment variables.

| Variable | Description |
| :------- | :---------- |
| `XXXXX`  | .....       |

## Heroku Variables

Our Heroku backend lives at [https://tenantly-back.herokuapp.com/](https://tenantly-back.herokuapp.com/).

Make sure you define the `JWT_SECRET` and `NODE_ENV` variables in the Heroku dashboard.

## Deployment

The app front-end is deployed on Netlify and the back-end is deployed on Heroku.

### Front-end Deployment

[![Netlify Status]](https://tenantly.netlify.com/)

The front-end is deployed via Netlify. For the build settings the base directory is `front-end`, build command is `npm build`, publish directory is `font-end/build`

### Back-end Deployment

TODO: How to set up back-end deployement

