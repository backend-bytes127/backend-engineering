import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: number;
}

let tasks: Task[] = [];

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req: Request, res: Response) => {
  const { completed, sortBy } = req.query;
  let filteredTasks = tasks;

  if (completed) {
    const isCompleted = completed === 'true';
    filteredTasks = tasks.filter(task => task.completed === isCompleted);
  }

  if (sortBy) {
    filteredTasks.sort((a, b) => {
      if (sortBy === 'createdAt') {
        return b.createdAt - a.createdAt;
      } else {
        if (a.priority === 'high') {
          return -1;
        } else if (b.priority === 'high') {
          return 1;
        } else if (a.priority === 'medium') {
          return -1;
        } else if (b.priority === 'medium') {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

  res.json(filteredTasks);
});

app.get('/tasks/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasks.find(task => task.id === Number(id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

app.post('/tasks', (req: Request, res: Response) => {
  const { title, description, completed, priority } = req.body;
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    description,
    completed: completed || false,
    priority: priority || 'low',
    createdAt: Date.now(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === Number(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  const { title, description, completed, priority } = req.body;
  const updatedTask = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description || tasks[taskIndex].description,
    completed: completed || tasks[taskIndex].completed,
    priority: priority || tasks[taskIndex].priority,
  };
  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
});

app.delete('/tasks/:id', (req: Request, res: Response) => {
  const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  tasks.splice(taskIndex, 1);
  res.sendStatus(204);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
