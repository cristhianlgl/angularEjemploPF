import { Component, OnInit } from '@angular/core';
import { Itask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  task1 : Itask =  {
    title : "Tarea1",
    description : "Descripcion tarea 1",
    completed : false,
    level : Levels.Info
  }

  task2 : Itask =  {
    title : "Tarea2",
    description : "Descripcion tarea 2",
    completed : true,
    level : Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task : Itask){
    console.log("delete task ", task?.title);
  }

}
