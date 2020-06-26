## Description

nestjs api with mock data for vue course https://www.youtube.com/watch?v=9xF89Q2052g&t=311s

Mock data is located in /src/videos/mocks

## Installation

If the api request gets blocked by cors policy, add a new file named vue.config.js in the **vue project root folder** with the following contents:

```
module.exports = {
  devServer: {
    proxy: {
      "/videos": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
```

Install nestjs and run the server:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

code based on https://scotch.io/tutorials/getting-started-with-nestjs
