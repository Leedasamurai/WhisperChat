
# WhisperChat

WhisperChat is an AI-powered chat application that integrates OpenAI to provide advanced features such as sentence completion, code communication, and answering user questions. The app is built using a modern tech stack, with React and Vite on the frontend and Node.js with Express on the backend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Sentence Completion**: WhisperChat can intelligently complete sentences using AI.
- **Code Communication**: Interact with the app using code, and WhisperChat will assist with AI-powered responses.
- **Question Answering**: Users can ask questions, and the app responds with AI-generated answers.
- **Fast Frontend Development**: The frontend is set up with Vite for fast refresh and HMR (Hot Module Replacement).

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool with support for ES6 modules and Hot Module Replacement (HMR).
- **ESLint**: Linter for maintaining code quality.

### Backend
- **Node.js**: JavaScript runtime for building scalable network applications.
- **Express**: A minimal and flexible Node.js web application framework.
- **OpenAI API**: For integrating AI-powered functionality into the app.
- **Morgan**: HTTP request logger middleware for Node.js.
- **Helmet**: Security middleware for HTTP headers.
- **CORS**: Middleware for enabling CORS (Cross-Origin Resource Sharing).

## Installation

To get started with WhisperChat, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Leedasamurai/WhisperChat.git
   cd WhisperChat
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Backend
   cd server
   npm install

   # Frontend
   cd client
   npm install
   ```

3. Create a `.env` file in the backend directory with the following:

   ```makefile
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

5. Start the frontend development server:

   ```bash
   npm run dev
   ```

## Usage

Once the servers are running:

- Visit [http://localhost:3000](http://localhost:3000) for the frontend.
- Use the chat interface to interact with the AI for sentence completion, code communication, or asking questions.

## Project Structure

```plaintext
WhisperChat/
├── client/                   # Frontend (React + Vite)
│   ├── public/                # Static assets
│   ├── src/                   # React components
│   └── ...
├── server/                   # Backend (Node.js + Express)
│   ├── index.js               # Server entry point
│   └── routes/                # API routes
└── README.md                 # Project documentation
```

## API Endpoints

### `/api/chat`

**POST** `/api/chat`: Sends a prompt to the OpenAI API and returns AI-generated responses.

#### Request Body:

```json
{
  "prompt": "Your input text here"
}
```

#### Response:

```json
{
  "response": "AI-generated response here"
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Submit a pull request.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Contact

Created by Lesego Phuku. Feel free to reach out if you have any questions or suggestions!
```

This `README.md` provides all the necessary details for setting up, using, and contributing to WhisperChat.
```
