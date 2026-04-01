import { Component } from '@angular/core';
import { TaskFilter } from "../task-filter/task-filter";
import { Task } from '../services/task';
import { TaskModel } from '../models/task';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskFilter, CommonModule, FormsModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

  constructor(private taskService: Task) {}

  tasks: Array<TaskModel> = [];

  newTask = new TaskModel();

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTask);

    this.newTask = new TaskModel();
  }

  removeTask(task: TaskModel) {
    this.taskService.removeTask(task);
  }

  updateTasks() {
    this.taskService.updateTasks();
  }

  filterTasks(filter: string) {
    if(filter !== '') {
      this.tasks = this.tasks.filter(c => c.name.includes(filter));
    }
    else {
      this.tasks = this.taskService.getTasks();
    }
  }
}
