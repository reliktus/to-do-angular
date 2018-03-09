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

  static removeTask(id: number, listType: Array<string>): void {
    listType.splice(id, 1);
  }

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
    AppComponent.removeTask(id, this.tasksList);
  }

  resolveTask(id: number): void {
    this.tasksList.push(this.doneTaskList[id]);
    AppComponent.removeTask(id, this.doneTaskList);
  }
}
