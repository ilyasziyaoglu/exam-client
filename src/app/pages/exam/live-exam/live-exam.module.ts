import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectComponent} from './subject/subject.component';
import {QuestionComponent} from './question/question.component';
import {LiveExamRoutingModule} from './live-exam-routing.module';
import {LiveExamComponent} from './live-exam.component';
import {NbAccordionModule, NbCardModule} from '@nebular/theme';


@NgModule({
  declarations: [
    SubjectComponent,
    QuestionComponent,
    LiveExamComponent,
  ],
  imports: [
    CommonModule,
    LiveExamRoutingModule,
    NbAccordionModule,
    NbCardModule,
  ],
})
export class LiveExamModule { }
