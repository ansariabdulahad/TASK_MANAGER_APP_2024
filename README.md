# Task Management App

![image](https://github.com/user-attachments/assets/832067d0-879b-4006-8794-e8ba0e774733)


## Overview

The Task Management App is a full-stack application built using the **MERN** (MongoDB, Express, React, Node.js) stack. It allows users to manage their tasks efficiently, with features that enable secure authentication and personalized task management.

## Features

- **User Authentication**: Users can sign up and log in using JWT (JSON Web Token) authentication.
- **Task Management**: Users can create, update, delete, and filter their tasks.
- **Personalized Experience**: Each user has their own unique task list stored in MongoDB.
- **Robust Testing**: The application includes test cases written using Jest to ensure reliability and performance.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Testing**: Jest
- **Deployment**: Render.com

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local setup or MongoDB Atlas account)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app

2. Install dependencies for both the frontend and backend:
   # For the backend
    cd server
    npm install
    
    # For the frontend
    cd ../client
    npm install

3. Create a .env file in the server directory and add your MongoDB connection string:
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Start the development servers:
   # In the backend directory
    npm start
    
    # In another terminal window, in the frontend directory
    npm run dev

Usage
Navigate to http://localhost:3000 to access the application.
Sign up for a new account or log in to an existing one.
Use the app to manage your tasks!

Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, feel free to reach out to me on LinkedIn or via email at ansariabdulahad3@gmail.com.
