Here’s an extremely detailed **README.md** for your project. You can copy and paste this directly into your project’s `README.md` file in VSCode.

```markdown
# Social Network API

This project is a **social network API** built with Node.js, Express, and MongoDB. It allows users to share their thoughts, react to friends' thoughts, and manage their friends list. This API handles CRUD operations for users, thoughts, and reactions, and it follows the **MVC** (Model-View-Controller) architecture.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [API Routes](#api-routes)
    - [User Routes](#user-routes)
    - [Thought Routes](#thought-routes)
    - [Reaction Routes](#reaction-routes)
- [Models](#models)
  - [User Model](#user-model)
  - [Thought Model](#thought-model)
  - [Reaction Model](#reaction-model)
- [Technologies](#technologies)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd social-network-api-main
   ```

3. **Install the required dependencies**:
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

4. **Set up your MongoDB database**:
   This project uses MongoDB. Make sure MongoDB is running locally on your machine or set up a remote MongoDB connection string. You'll need to configure the database connection string in the `config/connection.js` file.

5. **Run the application**:
   To start the server, use the following command:
   ```bash
   npm start
   ```

   The API will be available at `http://localhost:3001`.

## Usage

### Running the Application

1. After setting up and running the application, the server will listen for requests at `http://localhost:3001`.
2. Use an API client like **Insomnia** or **Postman** to interact with the API.
3. Use the provided routes below to create, read, update, and delete users, thoughts, and reactions.

### API Routes

#### User Routes

- **Create a New User**
  - **Method**: POST
  - **URL**: `/api/users`
  - **Request Body** (JSON):
    ```json
    {
      "username": "new_user",
      "email": "user@example.com"
    }
    ```
- **Get All Users**
  - **Method**: GET
  - **URL**: `/api/users`
  
- **Get a Single User by ID**
  - **Method**: GET
  - **URL**: `/api/users/:userId`
  
- **Update a User**
  - **Method**: PUT
  - **URL**: `/api/users/:userId`
  - **Request Body** (JSON):
    ```json
    {
      "username": "updated_username",
      "email": "updated_email@example.com"
    }
    ```

- **Delete a User**
  - **Method**: DELETE
  - **URL**: `/api/users/:userId`

#### Thought Routes

- **Create a New Thought**
  - **Method**: POST
  - **URL**: `/api/thoughts`
  - **Request Body** (JSON):
    ```json
    {
      "thoughtText": "This is a new thought",
      "username": "user_who_posted",
      "userId": "1234567890abcdef"
    }
    ```

- **Get All Thoughts**
  - **Method**: GET
  - **URL**: `/api/thoughts`

- **Get a Single Thought by ID**
  - **Method**: GET
  - **URL**: `/api/thoughts/:thoughtId`

- **Update a Thought**
  - **Method**: PUT
  - **URL**: `/api/thoughts/:thoughtId`
  - **Request Body** (JSON):
    ```json
    {
      "thoughtText": "Updated thought text"
    }
    ```

- **Delete a Thought**
  - **Method**: DELETE
  - **URL**: `/api/thoughts/:thoughtId`

#### Reaction Routes

- **Add a Reaction to a Thought**
  - **Method**: POST
  - **URL**: `/api/thoughts/:thoughtId/reactions`
  - **Request Body** (JSON):
    ```json
    {
      "reactionBody": "This is a reaction",
      "username": "user_who_reacted"
    }
    ```

- **Remove a Reaction from a Thought**
  - **Method**: DELETE
  - **URL**: `/api/thoughts/:thoughtId/reactions/:reactionId`

## Models

### User Model

The **User** model schema defines the following properties:

- `username`: String, required, unique
- `email`: String, required, unique, must match an email format
- `thoughts`: Array of ObjectIds referencing Thought model
- `friends`: Array of ObjectIds referencing User model

### Thought Model

The **Thought** model schema defines the following properties:

- `thoughtText`: String, required, between 1 and 280 characters
- `createdAt`: Date, defaults to the current timestamp
- `username`: String, required
- `reactions`: Array of Reaction subdocuments

### Reaction Model

The **Reaction** schema defines a subdocument within a Thought. It includes:

- `reactionBody`: String, required, maximum 280 characters
- `username`: String, required
- `createdAt`: Date, defaults to the current timestamp

## Technologies

This project is built with the following technologies:

- **Node.js**: JavaScript runtime for server-side code
- **Express**: Fast and minimalist web framework for Node.js
- **MongoDB**: NoSQL database used for data storage
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **Insomnia/Postman**: API testing clients to interact with the API

## License

This project is licensed under the [MIT License](./LICENSE).