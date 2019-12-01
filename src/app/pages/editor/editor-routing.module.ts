import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorComponent} from './editor.component';
import {ExamEditorComponent} from './exam-editor/exam-editor.component';
import {QuestionEditorComponent} from './question-editor/question-editor.component';


const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    redirectTo: '/exam-editor',
    pathMatch: 'full',
  },
  {
    path: 'exam-editor',
    component: ExamEditorComponent,
  },
  {
    path: 'question-editor',
    component: QuestionEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class EditorRoutingModule {
}
