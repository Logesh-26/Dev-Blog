# Dev-Blog

A full-stack blogging platform built using Node.js, Express.js, MongoDB, and EJS. Dev-Blog allows users to create accounts, publish blog posts, upload cover images, interact through comments, and manage their own blog content through a clean server-rendered interface.

## Project Overview

Dev-Blog is a server-side rendered blogging application designed for developers and content creators to share articles and interact with readers.

The platform includes:

* User authentication using JWT
* Blog creation and management
* Cover image uploads
* Comment system
* User-specific blog listing
* Admin-only blog deletion functionality

MongoDB is used for data persistence, while EJS templates provide dynamic frontend rendering.

## What the Application Does

### User Features

* User signup and login
* Secure authentication using JWT stored in cookies
* Create and publish blog posts
* Upload blog cover images
* View all blog posts
* Comment on blogs
* View personal blog posts
* Logout functionality

### Admin Features

* Delete blog posts
* Protected admin-only route access

## Main Features

* Server-side rendered UI using EJS
* JWT-based authentication
* Cookie-based session handling
* Blog image upload support
* Dynamic blog detail pages
* Comment system for user interaction
* MongoDB integration using Mongoose
* User-specific blog management
* Admin authorization middleware

## Key Files

### Controllers

Location: `controllers/`

* `blogController.js`

  * Handles blog creation, viewing, listing, and deletion logic

* `commentController.js`

  * Handles comment creation and comment-related functionality

* `staticController.js`

  * Renders static pages and homepage logic

* `userController.js`

  * Handles signup, login, logout, and authentication logic

### Models

Location: `models/`

* `blog.js`
* `comments.js`
* `user.js`

### Middleware

Location: `middlewares/`

* Authentication middleware
* Authorization middleware
* Admin route protection

### Routes

Location: `routers/`

* User routes
* Blog routes
* Comment routes
* Static routes

### Utilities

Location: `utils/`

* JWT token generation and verification helpers

### Views

Location: `views/`

* EJS templates for frontend rendering

### Public Assets

Location: `public/`

* Static CSS and frontend assets
* Uploaded blog images

## Data Model

### User

Stored in the `users` collection.

Fields:

* `fullName`
* `email`
* `password`
* `role`

### Blog

Stored in the `blogs` collection.

Fields:

* `title`
* `body`
* `coverImage`
* `createdBy`
* `views`
* `createdAt`

### Comment

Stored in the `comments` collection.

Fields:

* `content`
* `blogId`
* `createdBy`
* `createdAt`

## Routes Overview

### Authentication Routes

* `/login`
* `/signup`
* `/user/login`
* `/user/signup`
* `/user/logout`

### Blog Routes

* `/`

  * Homepage displaying all blogs

* `/blog/create`

  * Create a new blog post

* `/blog/view/:id`

  * View a single blog post

* `/blog/delete/:id`

  * Delete blog post (admin only)

* `/user/blogs`

  * View logged-in user's blogs

### Comment Routes

* `/comment/create`

  * Add comments to blog posts

## Authentication and Authorization

* JWT is used for authentication.
* Tokens are stored in browser cookies.
* Middleware protects authenticated routes.
* Admin-only routes are restricted using authorization middleware.

## Image Uploads

Multer is used for handling blog cover image uploads.

Uploaded images are stored inside:

```text id="0j3x6u"
public/uploads/
```

## Environment Variables

The application expects configuration values to be stored inside a local `.env` file.

Required variables include:

* `JWT_SECRET`
* `MONGODB_URI`

## Setup and Run Locally

### 1. Install Dependencies

```bash id="4x92tl"
npm install
```

### 2. Configure Environment Variables

Create a `.env` file and add the required configuration values.

### 3. Start MongoDB

Ensure MongoDB is running locally or provide a valid MongoDB connection string.

### 4. Run the Application

```bash id="4k96j1"
npm start
```

The server starts using nodemon for development.

## Available Scripts

* `npm start`

  * Starts the development server using nodemon

## Application Behavior Notes

* Blog posts are rendered dynamically using EJS templates.
* Authentication state is managed using JWT cookies.
* Users can only manage their own blog posts.
* Comments are linked to specific blog posts.
* Blog cover images are stored locally inside the public uploads directory.

## Current Implementation Considerations

* Authentication currently uses cookie-based JWT sessions.
* Uploaded images are stored locally instead of cloud storage.
* Authorization middleware controls admin-only deletion access.
* MongoDB handles all user, blog, and comment persistence.

## Repository Structure

```text id="ehv1b3"
dev-blog/
├── controllers/
│   ├── blogController.js
│   ├── commentController.js
│   ├── staticController.js
│   └── userController.js
│
├── middlewares/
│
├── models/
│   ├── blog.js
│   ├── comments.js
│   └── user.js
│
├── public/
│   └── uploads/
│
├── routers/
│
├── utils/
│
├── views/
│
├── package.json
└── README.md
```

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Frontend

* EJS Templates
* HTML
* CSS
* JavaScript

### Authentication & Utilities

* JWT
* Cookie-parser
* Body-parser
* Multer

## Author

**Logesh T**

Backend and MERN Stack Developer passionate about building scalable web applications and improving full-stack development skills.
