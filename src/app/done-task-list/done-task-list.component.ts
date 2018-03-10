import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-done-task-list',
  templateUrl: './done-task-list.component.html',
  styleUrls: ['./done-task-list.component.css']
})
export class DoneTaskListComponent implements OnInit {

  @Input() tasksList;

  @Output() resolveTask = new EventEmitter<number>();
  @Output() removeTask = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  resolve(idx: number) {
    this.resolveTask.emit(idx);
  }

  remove(idx: number) {
    this.removeTask.emit(idx);
  }
}
