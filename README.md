# Test gpt

This project is a simple web-based chat application that interacts with an AI named Lukas, using OpenAI GPT-3.5 Turbo. Lukas can only speak Lithuanian and will not mention OpenAI or the fact that it's an AI.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the App](#running-the-app)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm (v7+ recommended)
- An OpenAI API Key
- Visual Studio Code with the Live Server extension installed

### Installation

1. Clone this repository:
```
git clone https://github.com/krdei/chatgpt
```

2. Change the directory:
```
cd lukas-ai-chat
```

3. Install the required packages:
```
npm install
```

4. Create a `.env` file in the root folder and set your OpenAI API Key:
```
OPENAI_API_KEY=your_openai_api_key
```

## Running the App

1. Start the server by running:
```
npm start
```

2. Open the `index.html` file in Visual Studio Code.

3. Right-click on the `index.html` file and click "Open with Live Server" to launch the application using the Live Server extension.

4. Type your message in the input field and click the "Send" button. Lukas will respond with Lithuanian language messages.

**Note:** Make sure you have the necessary API credits with OpenAI, as each message sent to the AI will consume API credits.
