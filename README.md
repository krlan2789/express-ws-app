# 1. Express WebSocket App Example

## 1.1. **Specs**

- NodeJS `16.20.0`
- NPM `8.19.4`
- ExpressJS `4.17.1`
- NodeJS WebSocket Library `8.2.3`
- PostgreSQL `12.14`

## 1.2. **Getting Started**

1. Clone project repository :

   ```console
   $ git clone https://github.com/krlan2789/express-ws-app.git
   ```

2. Switch to the project directory :

   ```console
   $ cd express-wss-app
   ```

3. Install dependencies :

   ```console
   $ npm install
   or
   $ npm i
   ```

## 1.3. **Database Configuration**

1. Duplicate the `.env_example` or create new file, then rename it to `.env`.
2. Change the value as needed :

   ```ini
   DB_HOST=localhost # database hostname or ip
   DB_PORT=5432 # postgresql port
   DB_NAME=postgres # database name
   DB_USERNAME=root # database username
   DB_PASSWORD=12345678 # database password

   CONNECTION_PORT=8765 # node.js app port
   ```

## 1.4. **Running Applications**

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

4. Start on production mode using pm2 ([required pm2 package](https://github.com/Unitech/pm2)) :

   ```console
   $ npm start:pm2
   ```

5. Open browser, use websocket tester tools, then fill in the url with `[ws/wss]://[ip/hostname]:[port]?token=user_token`.

   ```
   Example :

   HTTP  -> ws://localhost:8765?token=user1240635408404344554
   HTTPS -> wss://localhost:8765?token=user1240635408404344554
   ```

   Or, run `npm run test:ws` on terminal.

6. Visit [this article](https://erlankurnia.github.io/note/2/WebSocket%20Service%20on%20VPS) to run the app on VPS/Cloud hosting/etc.
