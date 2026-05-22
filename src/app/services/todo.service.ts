import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo.model";
import { HttpClient } from "@angular/common/http";
import { Observable ,of} from "rxjs";




@Injectable({
    providedIn:'root'
})

export class todoService{
  todosArr:Array<Itodo> = [
  {
    todoItem: "Learn Angular",
    isComplited:true,
    todoId: 1
  },
  {
    todoItem: "Practice JavaScript",
        isComplited:false,
    todoId: 2
  },
  {
    todoItem: "Build Todo App",
        isComplited:true,
    todoId: 3
  }
];

//module==HttpModule >> GET,POST,PATCH,PUT,DELETE >>returns observable

constructor(private _http:HttpClient){}

fetchTodos():Observable<Itodo[]>{
  return of(this.todosArr)
}

//get multiple todos
//get single todo
//add new todo
//remove todo

// fetchtodos():Observable<any>{
// //API call to fetch todos from Db
// return this._http.get('https://jsonplaceholder.typicode.com/todos')

// }


}