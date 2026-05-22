import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Itodo } from 'src/app/models/todo.model';
import { todoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr:Array<Itodo>=[]

  constructor(private _TodoService:todoService) {}

  ngOnInit(): void {
    this._TodoService.fetchTodos()
    .subscribe({
      next:data => { 
        this.todosArr=data
      },
      error:err => {console.log(err);
      }
    })
  }

}
