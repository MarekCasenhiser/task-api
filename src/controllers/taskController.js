import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;

  const options = { completed: (completed === "true" ? true : (completed === "false" ? false : completed)) };
  console.log(req.query);
  console.log(options); 
  let tasks = await taskService.getAllTasks(options);
  res.status(200).json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
