import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassangerDashboardComponent } from './passanger-dashboard/passanger-dashboard.component';
import { PassangerCountComponent } from './passanger-count/passanger-count.component';
import { PassangerCardComponent } from './passanger-card/passanger-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';








@NgModule({
  declarations: [
    PassangerDashboardComponent,
    PassangerCountComponent,
    PassangerCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
     MatDialogModule 
  ],
  exports:[
    PassangerDashboardComponent
  ]
})
export class PassangerModule { }
