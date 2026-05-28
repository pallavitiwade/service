import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Ipassanger } from 'src/app/models/passanger.model';
import { PassangerService } from 'src/app/services/passanger.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-passanger-card',
  templateUrl: './passanger-card.component.html',
  styleUrls: ['./passanger-card.component.scss']
})
export class PassangerCardComponent implements OnInit {
@Input() passObj !:Ipassanger
@Output()emitCheckInFlag:EventEmitter<boolean>=new EventEmitter<boolean>()

@ViewChild('fullname') fullname !:ElementRef
isInEditMode:boolean=false
  constructor(
   private _passService:PassangerService,
   private _snackbar:SnackbarService,
          private _matDialog:MatDialog
   

  ) { }

  ngOnInit(): void {
  }

onUpadte(){
  this.passObj.fullname=this.fullname.nativeElement.value
  this._passService.updatePassanger(this.passObj)
  .subscribe({
    next:res=>{
      this._snackbar.openSnackBar(res.msg)
      this.isInEditMode=false
    },
    error:err=>{
      console.log(err)
    }

  })
}


onRemove(){
   let config=new MatDialogConfig()
    config.width='380px'
    config.disableClose=true;
    config.data=`Are You sure You want to remove this student with id`
    let matRef=this._matDialog.open(GetConfirmComponent,config)
  matRef.afterClosed()
  .subscribe(getConfirm=>{
  this._passService.removePassanger(this.passObj.id)
    .subscribe({
    next:res=>{
      this._snackbar.openSnackBar(res.msg)
      if(this.passObj.checkedIn){
        this.emitCheckInFlag.emit(true)
      }
    },
    error:err=>{
      this._snackbar.openSnackBar(err.msg)
    }
  })
}

)}
}
