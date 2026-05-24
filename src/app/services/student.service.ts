
import { Injectable } from "@angular/core";
import { IRes, Istd, IstdRes } from "../models/student.model";
import { HttpClient } from "@angular/common/http";
import { observable, Observable,of, Subject } from "rxjs";




@Injectable({
    providedIn:'root'
})

export class studentService{
stdsArr:Array<Istd> = [
      {
        Fullname: "Amit Sharma",
        Email: "amit.sharma@gmail.com",
        contact: "9876543210",
        IsActive: true,
        id: '2'
      },
      {
        Fullname: "Priya Verma",
        Email: "priya.verma@gmail.com",
        contact: "9123456780",
        IsActive: true,
        id: '3'
      },
      {
        Fullname: "Rahul Patil",
        Email: "rahul.patil@gmail.com",
        contact: "9988776655",
        IsActive: false,
        id: '4'
      },
      {
        Fullname: "Sneha Kulkarni",
        Email: "sneha.kulkarni@gmail.com",
        contact: "9090909090",
        IsActive: true,
        id: '5'
      },
      {
        Fullname: "Vikas Singh",
        Email: "vikas.singh@gmail.com",
        contact: "9871234567",
        IsActive: false,
        id: '6'
      }
    ];
    
private ediStdsub$:Subject<Istd>=new Subject()
ediStdobj$:Observable<Istd>=this.ediStdsub$.asObservable()

constructor(){}

emitEditStd(std:Istd){
  this.ediStdsub$.next(std)

}

    
    fetchstd():Observable<Istd[]>{
      return of(this.stdsArr)
    }

    addTodo(student:Istd):Observable<IstdRes>{
    {
     this.stdsArr.push(student)
      let res={
        msg:`New student  ${student.Fullname} Added successfully !!!`,
        data:student
      }
      return of(res)
    }

}
updatestudent(updatestd:Istd):Observable<IstdRes>{
  let GET_INDEX=this.stdsArr.findIndex(s=>s.id===updatestd.id)
  this.stdsArr[GET_INDEX]=updatestd
  return of({
    msg:`The student with id ${updatestd.id} is updated Succesfully !!!`,
    data:updatestd
  })


}






removeStd(id:string):Observable<IRes<Istd>>{
  let GET_INDEX=this.stdsArr.findIndex(s=>s.id===id);
 let removeStd=this.stdsArr.splice(GET_INDEX,1)

return of({
  msg:`The student with Id ${id} removed successfully !!!`,
  data:removeStd[0]
})

}

}