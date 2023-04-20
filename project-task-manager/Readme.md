# Task Management App

This is a simple task management application that allows users to create, update, and delete tasks. The application has a backend API built with Node.js and Express, and a frontend built with React.

## Getting Started
To get started with the application, clone the repository and follow the steps below:


1. Install dependencies: npm install
2. Start the server: npm start


### API Endpoints

The following API endpoints are available:

1. GET /tasks: Retrieve all tasks
2. GET /tasks/:id: Retrieve a single task by ID
3. POST /tasks: Create a new task
4. PUT /tasks/:id: Update an existing task
5. DELETE /tasks/:id: Delete a task by ID

### Filtering and Sorting

Users can filter and sort tasks by using the completed and sortBy query parameters. For example:

1. GET /tasks?completed=true: Retrieve all completed tasks
2. GET /tasks?sortBy=createdAt:desc: Retrieve all tasks sorted by creation date in descending order

### Priority
Users can assign a priority level to each task by using the priority attribute. The available priority levels are low, medium, and high.

### Demo

To test the POST API, execute the following command on your terminal

```
curl -X POST -H "Content-Type: application/json" -d '{"title": "Task 1", "description": "This is task 1", "completed": false, "priority": "low"}' http://localhost:3000/tasks
  ```

To test the GET API, execute the following command on your terminal

```
curl -X GET 'http://localhost:3000/tasks?sortBy=createdAt:desc&completed=true&priority=high'
```


[Tutorial](https://devcorner.hashnode.dev/creating-a-task-management-api-a-step-by-step-guide)