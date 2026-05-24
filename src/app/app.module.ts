import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetConfirmComponent } from './get-confirm/get-confirm.component'
import {MatDialogModule} from '@angular/material/dialog';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StdConfirmComponent } from './components/std-confirm/std-confirm.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDashboardComponent,
    GetConfirmComponent,
    StudentDashboardComponent,
    StudentTableComponent,
    StudentFormComponent,
    StdConfirmComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
      MatIconModule,
      MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
