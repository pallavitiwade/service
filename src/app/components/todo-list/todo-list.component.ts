import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscriber } from 'rxjs';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Itodo } from 'src/app/models/todo.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { todoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosArr:Array<Itodo>=[]

  constructor(private _TodoService:todoService,
              private _snackBar:SnackbarService,
              private _matDialog:MatDialog
  ) {}

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

  onRemove(id:string){
    {
   
      let matConfig=new MatDialogConfig()
       matConfig.width='350px',
       matConfig.disableClose=true
       matConfig.data=`Are you sure, You Want to Remove todo with ID ${id}?`
       let matRef=this._matDialog.open(GetConfirmComponent,matConfig)

       matRef.afterClosed().subscribe(res => {
        if(res){
          this._TodoService.removeTodo(id).subscribe({
            next:res => {
              this._snackBar.openSnackBar(res.msg)
            },
           error:err => {
            this._snackBar.openSnackBar(err.msg)
           }
            
        })
        }
       })


       

}
  }

onEditTodo(todo:Itodo){
  console.log(todo);
  this._TodoService.editTodoSub$.next(todo)

}

}
