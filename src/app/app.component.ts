import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = '';
  tasksList: Array<string> = [];
  inputClass = '';
  doneTaskList: Array<string> = [];

  addTask() {
    const _this = this;
    if (this.newTask !== '') {
      this.tasksList.push(this.newTask);
      this.inputClass = 'added';
      this.newTask = 'Zadanie dodane do listy :-)';
      setTimeout(function () {
        _this.newTask = '';
        _this.inputClass = '';
      }, 1000);
    }
  }

  doneTask(id: number): void {
    this.doneTaskList.push(this.tasksList[id]);
    this.tasksList.splice(id, 1);
  }

  resolveTask(id: number): void {
    this.tasksList.push(this.doneTaskList[id]);
    this.doneTaskList.splice(id, 1);
  }

  removeTask(id, listType): void {
    // TODO deal with this static method
    listType.splice(id, 1);
  }
}
