# Backend-Aditya-Agarwal-Project-Slidely-Task-2

This REPO is only for the Backend code. The Frontend code is in another Repo. (https://github.com/aditya8503/Aditya-Agarwal-Project-Slidely-Task-2/)

As instructed, Node and Express are used. All the standard requirements and compulsory parameters have been checked and thoroughly verified to be working.

For your convenience, here is the screen recording of the entire working of the tool. (**https://drive.google.com/file/d/1ULw3c-0E4oeJGpuGJlN_A25ppTmJMFo6/view?usp=sharing**) It gives a quick overview of everything. Sometimes, the mouse is used, while other times, shortcut keys are used to show all behaviors.

This is a Node.js and Express.js backend for handling form submissions. The data is stored in a JSON file (`db.json`). Additionally, the read_all endpoint is implemented to get all submissions at once for getting a count of total submissions.

## Endpoints

- **GET /ping**: Check if the server is running.
- **GET /read_all**: Retrieve all form submissions.
- **GET /read?index={index}**: Retrieve a specific form submission by index.
- **POST /submit**: Submit a new form entry.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
