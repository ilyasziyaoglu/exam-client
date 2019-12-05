import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiveExamComponent} from './live-exam.component';
import {SubjectComponent} from './subject/subject.component';
import {QuestionComponent} from './question/question.component';


const routes: Routes = [{
  path: '',
  component: LiveExamComponent,
  children: [
    {
      path: 'subject',
      component: SubjectComponent,
    },
    {
      path: 'question',
      component: QuestionComponent,
    },
    {
      path: '',
      redirectTo: 'subject',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveExamRoutingModule { }
