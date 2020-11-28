## Reference Links
 - **Login using Google** - https://dev.to/imichaelowolabi/how-to-implement-login-with-google-in-nest-js-2aoa
 - **Login using Facebook** - https://dev.to/elishaking/how-to-implement-facebook-login-with-nestjs-90h

## Packages installed
 - @nestjs/passport
 - passport
 - passport-google-oauth20
 - passport-facebook
 - @types/passport-google-oauth20
 - @types/passport-facebook

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints to test the application
 - **Google Login** - http://localhost:3000/googleLogin
 - **Facebook Login** - http://localhost:3000/facebookLogin

```
NOTE: Please replace <client-id> and <client-secret> in google.strategy.ts and facebook.strategy.ts
```