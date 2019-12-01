import {NgModule} from '@angular/core';
import {StudentRoutingModule} from './student-routing.module';
import {StudentHomeComponent} from './student-home/student-home.component';
import {StudentComponent} from './student.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
  ],
  imports: [
    StudentRoutingModule,
  ],
})
export class StudentModule {
}
