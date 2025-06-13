# Building a Real-Time Application with Express and WebSocket

Real-time applications are becoming increasingly popular, and WebSocket technology is at the heart of many of these systems. In this article, we will explore how to set up and run a WebSocket-based application using ExpressJS. This guide will walk you through the specifications, setup process, database configuration, and running the application.

---

## Specifications

To get started, ensure you have the following tools and versions installed:

- **NodeJS**: `16.20.0`
- **NPM**: `8.19.4`
- **ExpressJS**: `4.17.1`
- **NodeJS WebSocket Library**: `8.2.3`
- **PostgreSQL**: `12.14`

---

## Getting Started

Follow these steps to set up the project:

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```shell
$ git clone https://github.com/krlan2789/express-ws-app.git
```

### Step 2: Navigate to the Project Directory

Switch to the project directory:

```shell
$ cd express-wss-app
```

### Step 3: Install Dependencies

Install the required dependencies using NPM:

```shell
$ npm install
```

Alternatively, you can use the shorthand:

```shell
$ npm i
```

---

## Configuring the Database

To connect the application to a PostgreSQL database, follow these steps:

### Step 1: Create an Environment File

Duplicate the `.env_example` file or create a new `.env` file in the project root directory.

### Step 2: Update the Configuration

Modify the `.env` file with your database and application settings:

```ini
DB_HOST=localhost       # Database hostname or IP
DB_PORT=5432            # PostgreSQL port
DB_NAME=postgres        # Database name
DB_USERNAME=root        # Database username
DB_PASSWORD=12345678    # Database password

CONNECTION_PORT=8765    # Node.js application port
```

---

## Running the Application

Once the setup is complete, you can run the application in different modes:

### Step 1: Navigate to the Project Directory

Ensure you are in the project directory:

```shell
$ cd express-wss-app
```

### Step 2: Start the Application

- **Development Mode**:

   ```shell
   $ npm run dev
   ```

- **Production Mode**:

   ```shell
   $ npm start
   ```

- **Production Mode with PM2** (requires [PM2](https://github.com/Unitech/pm2)):

   ```shell
   $ npm start:pm2
   ```

### Step 3: Test the WebSocket Connection

Use a WebSocket testing tool and connect to the application using the following URL format:

```http
[ws/wss]://[ip/hostname]:[port]?token=user_token
```

#### Example:

- **HTTP**: `ws://localhost:8765?token=user1240635408404344554`
- **HTTPS**: `wss://localhost:8765?token=user1240635408404344554`

Alternatively, you can run the following command to test the WebSocket connection:

```shell
$ npm run test:ws
```

---

## Deploying to VPS or Cloud Hosting

For detailed instructions on deploying this application to a VPS or cloud hosting environment, refer to [this article](https://erlankurnia.github.io/note/2/WebSocket%20Service%20on%20VPS).

---

By following this guide, you can quickly set up and run a WebSocket-based application using ExpressJS. This setup is ideal for building real-time features such as chat applications, live notifications, or collaborative tools.
