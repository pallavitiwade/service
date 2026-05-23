import { Injectable } from "@angular/core";
import { Itodo, ItodoRes } from "../models/todo.model";
import { HttpClient } from "@angular/common/http";
import { Observable ,of, Subject} from "rxjs";

@Injectable({
    providedIn:'root'
})

export class todoService{
  todosArr:Array<Itodo> = [
  {
    todoItem: "Angular",
    todoId: '1'
  },
  {
    todoItem: "JavaScript",
    todoId: '2'
  },
  {
    todoItem: "Node-js",
    todoId: '3'
  }
];

editTodoSub$:Subject<Itodo>=new Subject<Itodo>()

//module==HttpModule >> GET,POST,PATCH,PUT,DELETE >>returns observable

constructor(private _http:HttpClient){}

fetchTodos():Observable<Itodo[]>{
  return of(this.todosArr)
}

//get multiple todos
//get single todo
//remove todo

// fetchtodos():Observable<any>{
// //API call to fetch todos from Db
// return this._http.get('https://jsonplaceholder.typicode.com/todos')

// }

//add new todo
addTodo(todo:Itodo):Observable<ItodoRes>{
 this.todosArr.push(todo)
  let res={
    msg:`New Todo Item with id ${todo.todoId} created successfully !!!`,
    data:todo
  }
  return of(res)
}
removeTodo(id:string):Observable<ItodoRes>{
  let GET_INDEX=this.todosArr.findIndex(t=>t.todoId===id)
  let removeTodo=this.todosArr.splice(GET_INDEX,1)

  return of({
     msg:`New Todo Item with id ${removeTodo[0].todoId} removed successfully !!!`,
    data:removeTodo[0]

  })

}

updateTodo(updateTodo:Itodo):Observable<ItodoRes>{
let GET_INDEX=this.todosArr.findIndex(t=>t.todoId===updateTodo.todoId)
this.todosArr[GET_INDEX]=updateTodo

return of({
  msg:`The Todo Item id ${updateTodo.todoId} is Updated Successfully !!!`,
  data:updateTodo
})

  }





}