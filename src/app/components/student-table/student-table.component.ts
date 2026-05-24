import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Istd } from 'src/app/models/student.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { studentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {


    stdsArr:Array<Istd>=[]
  
  constructor(
        private _stdservice: studentService,
       private _snackBar:SnackbarService,
       private _matDialog:MatDialog
        

  ) { }

  ngOnInit(): void {
    this._stdservice.fetchstd()
    .subscribe({
      next:data => { 
        this.stdsArr=data
      },
      error:err => {console.log(err);
        this._snackBar.openSnackBar(err)
      }
    })
  }

onRemove(id:string){
  let config=new MatDialogConfig()
  config.width='480px'
  config.disableClose=true;
  config.data=`Are You sure You want to remove this student with id ${id}`
  let matRef=this._matDialog.open(GetConfirmComponent,config)
matRef.afterClosed()
.subscribe(getConfirm=>{
  if(getConfirm){
    this._stdservice.removeStd(id)
    .subscribe({
      next:res=>{
        console.log(res)
        this._snackBar.openSnackBar(res.msg)

      },
      error:err=>{
        this._snackBar.openSnackBar(err.msg)
      }
    })
  }
})
}

onEdit(std:Istd){

  // this._stdservice.ediStdsub$.next(std)
this._stdservice.emitEditStd(std)




}


}
