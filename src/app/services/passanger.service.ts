import { Injectable } from '@angular/core';
import { Ipassanger } from '../models/passanger.model';
import { Observable, of } from 'rxjs';
import { IRes } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class PassangerService {

  passangerArray:Array<Ipassanger> = [
  {
    id: 1,
    fullname: "Rahul Sharma",
    checkedIn: true,
    checkInDate: 1467899890000 ,
    children: null
  },
  {
    id: 2,
    fullname: "Priya Verma",
    checkedIn: false,
    checkInDate: null,
    children: [
      {name:'gauri', age:12},
      {name:'radhika', age:10}
    ]
  },
  {
    id: 3,
    fullname: "Amit Joshi",
    checkedIn: true,
    checkInDate: 1467897654000,
    children: null
  },
  {
    id: 4,
    fullname: "sonakshi Patil",
    checkedIn: false,
    checkInDate:null,
    children:  [
      {name:'gauri', age:12},
      {name:'radhika', age:10}
    ]
  },
  {
    id: 5,
    fullname: "Karan Mehta",
    checkedIn: true,
    checkInDate: 1467897890000,
    children: null
  }
];

  constructor() { }
fetchpassanger():Observable<Ipassanger[]>{
return of(this.passangerArray)

}
updatePassanger(updateObj:Ipassanger):Observable<IRes<Ipassanger>>{
  let GET_INDEX=this.passangerArray.findIndex(p=>p.id === updateObj.id)
  this.passangerArray[GET_INDEX]=updateObj
  return of({
    msg:`The passanger with id ${updateObj.id} is updated successfully!!!`,
    data:updateObj
  })
}

removePassanger(id:number):Observable<IRes<Ipassanger>>{
let GET_INDEX=this.passangerArray.findIndex(p=>p.id===id)
let removePass=this.passangerArray.splice(GET_INDEX,1)

return of({
msg:`The passanger with id ${removePass[0].id} is removed successfully`,
data:removePass[0]


})
}


}
