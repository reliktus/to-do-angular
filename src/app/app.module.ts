import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DoneTaskListComponent } from './done-task-list/done-task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    DoneTaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
