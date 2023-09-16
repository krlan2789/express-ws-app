# 1. Express WebSocket App

## 1.1. **Installation**

1. Switch to the project directory :

   ```console
   $ cd express-wss-app
   ```

2. Install dependecies :

   ```console
   $ npm install
   or
   $ npm i
   ```

## 1.2. **Database Configuration**

1. Duplicate the `.env_example` file then rename it to `.env`.
2. Change the value as needed.

   ```ini
   DB_HOST=localhost # database hostname or ip
   DB_PORT=5432 # postgresql port
   DB_NAME=postgres # database name
   DB_USERNAME=root # database username
   DB_PASSWORD=12345678 # database password

   CONNECTION_PORT=8765 # node.js app port
   ```

## 1.3. **Running Applications**

1. Switch to the project directory :

   ```console
   $ cd express-wss-app
   ```

2. Start on development mode :

   ```console
   $ npm run dev
   ```

3. Start on production mode :

   ```console
   $ npm start
   ```

4. Open browesr use websocket tester tools, then fill in the url with `ws://localhost:8765?token=user_token`.
