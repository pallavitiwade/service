import { Component, OnInit } from '@angular/core';
import { Ipassanger } from 'src/app/models/passanger.model';
import { PassangerService } from 'src/app/services/passanger.service';

@Component({
  selector: 'app-passanger-dashboard',
  templateUrl: './passanger-dashboard.component.html',
  styleUrls: ['./passanger-dashboard.component.scss']
})
export class PassangerDashboardComponent implements OnInit {
passArr !: Ipassanger[]
checkInArr!:Ipassanger[]
  constructor(
private _passService:PassangerService

  ) { }

  ngOnInit(): void {
   this.getPassanger()
   this.getCheckInCount()
  }
  getPassanger(){
     this._passService.fetchpassanger()
    .subscribe({
      next:data=>{
        this.passArr=data
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  getCheckInCount(){
   this.checkInArr=this.passArr.filter(p=>{
      return p.checkedIn
    })
  }
getRemoveFlag(flag:boolean){
  this.getCheckInCount()


}


}
