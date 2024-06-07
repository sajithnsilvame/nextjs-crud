
# Next.js CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Next.js. It uses MongoDB for data storage and demonstrates how to perform basic CRUD operations using Next.js API routes.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Authors](#authors)
- [License](#license)

## Demo

Check out the live demo of the application: [Demo Link](https://your-demo-link.com)

## Features

- Create a new topic
- Read and display all topics
- Update an existing topic
- Delete a topic

## Installation

To get started with the application, follow these steps:

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/your-username/your-repo-name.git
   \`\`\`

2. **Navigate to the project directory:**

   \`\`\`bash
   cd your-repo-name
   \`\`\`

3. **Install the dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

4. **Set up environment variables:**

   Create a \`.env.local\` file in the root of your project and add your MongoDB URI:

   \`\`\`env
   MONGODB_URI=mongodb://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   \`\`\`

## Usage

To run the application locally, use the following command:

\`\`\`bash
npm run dev
\`\`\`

This will start the development server on \`http://localhost:3000\`.

## API Routes

### Create a Topic

**Endpoint:** \`POST /api/topics\`

**Body:**

\`\`\`json
{
  "title": "Sample Topic",
  "description": "This is a sample topic description."
}
\`\`\`

### Get All Topics

**Endpoint:** \`GET /api/topics\`

### Get a Topic by ID

**Endpoint:** \`GET /api/topics/[id]\`

### Update a Topic

**Endpoint:** \`PUT /api/topics/[id]\`

**Body:**

\`\`\`json
{
  "newTitle": "Updated Topic",
  "newDescription": "This is an updated topic description."
}
\`\`\`

### Delete a Topic

**Endpoint:** \`DELETE /api/topics/[id]\`

## Authors

- [Your Name](https://github.com/sajithnsilvame)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
