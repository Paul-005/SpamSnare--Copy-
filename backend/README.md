# Appwrite Express Backend

This project is a lightweight Node.js backend application built with Express and the Appwrite SDK. It provides a set of API routes for user management and email generation.

## Project Structure

```
appwrite-express-backend
├── src
│   ├── app.js          # Entry point of the application
│   └── routes
│       └── index.js    # API routes
├── .env                # Environment variables
├── package.json        # NPM configuration
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd appwrite-express-backend
   ```

2. **Install dependencies:**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   APPWRITE_ENDPOINT=<your-appwrite-endpoint>
   APPWRITE_PROJECT_ID=<your-appwrite-project-id>
   APPWRITE_API_KEY=<your-appwrite-api-key>
   ```

4. **Start the server:**

   Run the following command to start the server:

   ```bash
   npm start
   ```

   The server will start on port 3000, and you should see a message in the console indicating that it is running.

## API Routes

- **POST /signup**  
  Creates a new user in Appwrite. Accepts `email`, `password`, and `name`.

- **POST /login**  
  Logs in a user and creates a session. Accepts `email` and `password`.

- **POST /generate-email**  
  Generates a unique fake email alias. Accepts `url` and returns the generated alias.

- **POST /capture-creds**  
  Logs the provided credentials. Accepts `email`, `password`, and `website`.

- **POST /check-site**  
  Checks if a site is flagged. Accepts `url` and returns a placeholder response.

## Usage

You can use tools like Postman or cURL to test the API endpoints. Make sure to set the appropriate headers and body for each request as specified in the API routes section.

---

## Deploying to Vercel

This backend can be deployed to [Vercel](https://vercel.com/) as a custom Node.js server:

1. **Push your code to a GitHub/GitLab/Bitbucket repository.**
2. **Sign in to Vercel and import your repository.**
3. **Set environment variables** in the Vercel dashboard (from your `.env` file).
4. **No build step is required** (unless you add one). Vercel will use the `vercel.json` config to route all requests to your Express server in `src/app.js`.
5. **After deployment**, your API will be available at your Vercel domain.

If you need custom routing or serverless functions, see the [Vercel documentation](https://vercel.com/docs/concepts/functions/serverless-functions) for more advanced usage.