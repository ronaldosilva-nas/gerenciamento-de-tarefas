import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';

export const routes: Routes = [
    {path: 'taskList', title: 'Lista de Tarefas', component: TaskList},
    {path: 'taskDetails/:id', title: 'Detalhes da Tarefa', component: TaskDetails},
    {path: '', redirectTo: 'taskList', pathMatch: 'full'}
];
