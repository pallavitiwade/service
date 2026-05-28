import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './get-confirm/get-confirm.component'
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StdConfirmComponent } from './components/std-confirm/std-confirm.component';
import { PassangerModule } from './components/passanger/passanger.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module'




@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoDashboardComponent,
    GetConfirmComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StdConfirmComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PassangerModule,
   BrowserAnimationsModule,
   MaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
