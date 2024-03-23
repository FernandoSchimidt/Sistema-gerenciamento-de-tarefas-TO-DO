import { Component } from '@angular/core';

import { TodoService } from '../services/todo.service';

import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ MatTableModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  displayedColumns: string[] = ['nome', 'descricao', 'realizado', 'prioridade'];
  dataSource = ELEMENT_DATA;

  constructor(private service: TodoService) {}

  list() {
    this.service.list().subscribe((list) => {
      console.log(list);
    });
  }
}
