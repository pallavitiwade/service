import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/models/student.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { studentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {


  isInEditMode:boolean=false

    @ViewChild('stdForm') stdForm!: NgForm
    editStd!:Istd
  constructor(

        private _stdservice: studentService,
            private _snackBar:SnackbarService
        

  ) { }

  ngOnInit(): void {
    this.patchStdInfo()
  }


  patchStdInfo(){
    this._stdservice.ediStdobj$.subscribe(std=>{
      console.log(std)
      this.isInEditMode=true
      this.editStd=std;
      this.stdForm.form.patchValue(std)
    })
  }


  onTodoSubmit(){
    if(this.stdForm.valid){
          let NEW_TODO:Istd={
            ...this.stdForm.value,
            todoId:Date.now().toString()
          }
          this.stdForm.reset()
          this._stdservice.addTodo(NEW_TODO).subscribe({
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

onUpdate(){
  if(this.stdForm.valid){
    let UPDATED_STD:Istd={...this.stdForm.value, id:this.editStd.id}
    this._stdservice.updatestudent(UPDATED_STD)
    .subscribe({
      next:res=>{
        this._snackBar.openSnackBar(res.msg)
        this.stdForm.reset()
        this.isInEditMode=false

      },
      error:err=>{
        this._snackBar.openSnackBar(err.error)
      }

    })
  }
}




}
