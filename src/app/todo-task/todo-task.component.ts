import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input()
  taskList = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  removeEmit = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  remove(task: string) {
    this.removeEmit.emit(task);
  }

  done(task: string) {
    this.emitDone.emit(task);
  }

}
