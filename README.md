# Anonymous Message Board

This application is an anonymous message board where users can post messages and see them displayed in real-time. It's designed to be simple and easy to use, with a focus on real-time interactivity.

## Features

- Users can post a message to the message board.
- Each message is limited to 128 characters.
- Messages are displayed from most to least recent.
- Users on different computers can post to the same board and view each other's messages in real-time.

## Technology Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Backend**: Node.js with Express.js
- **Real-Time Communication**: WebSocket Protocol using the `ws` library
- **Styling**: Basic CSS with responsive design

## Getting Started

### Prerequisites

Before running the application, you will need to have Node.js installed on your machine. If you don't have Node.js installed, you can download and install it from [nodejs.org](https://nodejs.org/).

### Installation

To set up the application locally, follow these steps:

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/ahnfikd7/message-board.git
    ```
2. Navigate to the project directory:
    ```sh
    cd message-board
    ```
3. Install the necessary packages:
    ```sh
    npm install
    ```

### Running the Application

After installing the dependencies, you can start the server with the following command:

```sh
node server.js
