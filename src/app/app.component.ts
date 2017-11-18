import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskList: Array<string> = [];
  doneList: Array<string> = [];

  add(task: string) {
    if (task !== '' && task !== undefined) {
      this.taskList.push(task);
    }
  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
  }
}
