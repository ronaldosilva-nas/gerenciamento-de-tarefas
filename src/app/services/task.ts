import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class Task {
  
  constructor() {}

  private tasks: Array<TaskModel> = [];

  getTasks(): Array<TaskModel> {
    this.tasks = this.getFromLocalStorange();
    return this.tasks;
  }

  getById(id: number): TaskModel | undefined {
    const task = this.tasks.find(c => c.id === id);
    return task;
  }

  addTask(task: TaskModel): void {
    this.tasks.push(task);
    this.saveToLocalStorange();
  }

  updateTasks() {
    this.saveToLocalStorange();
  }

  removeTask(task: TaskModel) {
    const index = this.tasks.indexOf(task);
    if(index !== -1) {
      //achou
      this.tasks.splice(index, 1);
      this.saveToLocalStorange();
    }
  }

  private saveToLocalStorange() {
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJSON);
  }

  private getFromLocalStorange(): Array<TaskModel> {
    const tasksJSON = localStorage.getItem('tasks');
    if(!tasksJSON) {
      //não achou
      return new Array<TaskModel>();
    }
    return JSON.parse(tasksJSON);
  }
}
