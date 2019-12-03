import {NgModule} from '@angular/core';
import {StudentRoutingModule} from './student-routing.module';
import {StudentHomeComponent} from './student-home/student-home.component';
import {StudentComponent} from './student.component';
import { StudentExamDetailComponent } from './student-exam-detail/student-exam-detail.component';
import {NbCardModule} from "@nebular/theme";


@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentExamDetailComponent,
  ],
  imports: [
    StudentRoutingModule,
    NbCardModule,
  ],
})
export class StudentModule {
}
