# Building a Real-Time Application with Express and WebSocket

Real-time applications are revolutionizing the way we interact with technology, enabling instantaneous communication and updates. At the core of these systems lies WebSocket technology, which facilitates seamless two-way communication between clients and servers. In this article, we will delve into the process of building a WebSocket-based application using ExpressJS, covering everything from prerequisites to deployment.

## Prerequisites

Before diving into the setup, ensure you have the following tools and versions installed:

- **NodeJS**: `16.20.0`
- **NPM**: `8.19.4`
- **ExpressJS**: `4.17.1`
- **NodeJS WebSocket Library**: `8.2.3`
- **PostgreSQL**: `12.14`

These tools form the backbone of the application, enabling efficient development and database management.

## Setting Up the Project

### Step 1: Cloning the Repository

Begin by cloning the project repository to your local machine. This repository contains all the necessary files and configurations to get started:

```shell
$ git clone https://github.com/krlan2789/express-ws-app.git
```

### Step 2: Navigating to the Project Directory

Once cloned, navigate to the project directory:

```shell
$ cd express-wss-app
```

### Step 3: Installing Dependencies

Install the required dependencies using NPM. This ensures that all necessary packages are available for the application:

```shell
$ npm install
```

Alternatively, you can use the shorthand command:

```shell
$ npm i
```

## Configuring the Database

To enable database connectivity, follow these steps:

### Step 1: Creating an Environment File

Duplicate the `.env_example` file or create a new `.env` file in the project root directory. This file will store your application and database settings.

### Step 2: Updating the Configuration

Edit the `.env` file with your specific database credentials and application settings:

```ini
DB_HOST=localhost       # Database hostname or IP
DB_PORT=5432            # PostgreSQL port
DB_NAME=postgres        # Database name
DB_USERNAME=root        # Database username
DB_PASSWORD=12345678    # Database password

CONNECTION_PORT=8765    # Node.js application port
```

These configurations ensure seamless communication between the application and the PostgreSQL database.

## Running the Application

With the setup complete, you can now run the application. Choose the appropriate mode based on your requirements:

### Step 1: Navigating to the Project Directory

Ensure you are in the project directory:

```shell
$ cd express-wss-app
```

### Step 2: Starting the Application

- **Development Mode**: Ideal for testing and debugging during development.

   ```shell
   $ npm run dev
   ```

- **Production Mode**: Suitable for deploying the application in a live environment.

   ```shell
   $ npm start
   ```

- **Production Mode with PM2**: For enhanced process management, use PM2 (requires installation).

   ```shell
   $ npm start:pm2
   ```

### Step 3: Testing the WebSocket Connection

To verify the WebSocket functionality, use a WebSocket testing tool and connect using the following URL format:

```http
[ws/wss]://[ip/hostname]:[port]?token=user_token
```

#### Example URLs:

- **HTTP**: `ws://localhost:8765?token=user1240635408404344554`
- **HTTPS**: `wss://localhost:8765?token=user1240635408404344554`

Alternatively, you can run the following command to test the WebSocket connection:

```shell
$ npm run test:ws
```

## Deploying the Application

Deploying the application to a VPS or cloud hosting environment is straightforward. For detailed instructions, refer to [this deployment note](https://erlankurnia.github.io/note/2/WebSocket%20Service%20on%20VPS).

## Conclusion

By following this guide, you can efficiently set up and run a WebSocket-based application using ExpressJS. This setup is perfect for building real-time features such as chat applications, live notifications, or collaborative tools. With WebSocket technology, the possibilities for creating dynamic and interactive applications are endless.
