import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectComponent} from './subject/subject.component';
import {QuestionComponent} from './question/question.component';
import {LiveExamRoutingModule} from './live-exam-routing.module';
import {LiveExamComponent} from './live-exam.component';


@NgModule({
  declarations: [
    SubjectComponent,
    QuestionComponent,
    LiveExamComponent,
  ],
  imports: [
    CommonModule,
    LiveExamRoutingModule,
  ],
})
export class LiveExamModule { }
