import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamRoutingModule} from './exam-routing.module';
import {DetailComponent} from './detail/detail.component';
import {SearchComponent} from './search/search.component';
import {FilterComponent} from './filter/filter.component';
import {ResultComponent} from './result/result.component';
import {ExamComponent} from './exam.component';
import {EditorModule} from './editor/editor.module';
import {LiveExamModule} from './live-exam/live-exam.module';
import {NbCardModule} from "@nebular/theme";


@NgModule({
  declarations: [
    ExamComponent,
    DetailComponent,
    SearchComponent,
    FilterComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    EditorModule,
    LiveExamModule,
    NbCardModule,
  ],
})
export class ExamModule {
}
