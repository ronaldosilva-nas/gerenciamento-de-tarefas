import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../models/task';
import { Task } from '../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  imports: [FormsModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {

  task?: TaskModel;

  constructor(private router: Router, private route: ActivatedRoute, private taskService: Task) {}

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    if(id === null) {
      this.navigateBack();
    }
    else {
      this.task = this.taskService.getById(+id);

      if(this.task === undefined) {
        this.navigateBack();
      }
    }  
  }

  save() {
    this.taskService.updateTasks();

    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    
    this.router.navigate(['/taskList'], {relativeTo: this.route});
  }
}
