import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @Input() tasksList;

  @Output() doneTask = new EventEmitter<number>();
  @Output() removeTask = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  done(idx: number) {
    this.doneTask.emit(idx);
  }

  remove(id: number) {
    this.removeTask.emit(id);
  }
}
