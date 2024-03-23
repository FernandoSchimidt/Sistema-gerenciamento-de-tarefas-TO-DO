import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpCliente:HttpClient) { }

  list(){
    return this.httpCliente
    .get<Todo>('http://localhost:8080/todos')
  }
}
