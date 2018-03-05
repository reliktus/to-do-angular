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
  // doneTask: Array<string> = [];

  addTask() {
    let _this = this;
    if (this.newTask !== '') {
      this.tasksList.push(this.newTask);
      this.inputClass = 'added';
      this.newTask = 'Zadanie dodane !';
      console.log(this.tasksList);
      setTimeout(function () {
        console.log('time out');
        _this.newTask = '';
        _this.inputClass = '';
      }, 1000);
    }
  }

}
