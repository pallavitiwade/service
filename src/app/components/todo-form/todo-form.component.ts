import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/models/todo.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { todoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  isInEditMode: boolean = false;
  editTodo!:Itodo
  @ViewChild('todoForm') todoForm !: NgForm
  constructor(
    private _todoservice: todoService,
    private _snackBar:SnackbarService


  ) { }

  ngOnInit(): void {
    this.onTodoPatch()
    }
  

onTodoSubmit(){
    if(this.todoForm.valid){
      let NEW_TODO:Itodo={
        ...this.todoForm.value,
        todoId:Date.now().toString()
      }
      this.todoForm.reset()
      this._todoservice.addTodo(NEW_TODO).subscribe({
        next:data => {
          console.log(data)
          this._snackBar.openSnackBar(data.msg)
        },
        error:err => {
          console.log(err)
        }
      })
    }

  }
onTodoPatch(){
  this._todoservice.editTodoSub$.subscribe({
      next:data=>{
        console.log(data);
        this.isInEditMode=true;
        this.editTodo=data
        this.todoForm.form.patchValue(data)
      }
})
}

onUpdate(){
  if(this.todoForm.valid){
    let UPDATED_OBJ:Itodo={
      ...this.todoForm.value,
      todoId:this.editTodo.todoId
    }
    console.log(UPDATED_OBJ)
    this._todoservice.updateTodo(UPDATED_OBJ)
    .subscribe({
      next:res=>{
        this._snackBar.openSnackBar(res.msg)
        this.todoForm.reset();
        this.isInEditMode=false;

      },
      error:err=>{
        this._snackBar.openSnackBar(err)
      }
      
    })
  }




}
  


}



