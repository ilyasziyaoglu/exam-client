import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExamComponent} from './exam.component';
import {ExamRoutingModule} from './exam-routing.module';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { EditorComponent } from './editor/editor.component';
import { LiveExamComponent } from './live-exam/live-exam.component';


@NgModule({
  declarations: [ExamComponent, DetailComponent, SearchComponent, FilterComponent, EditorComponent, LiveExamComponent],
  imports: [
    CommonModule,
    ExamRoutingModule,
  ],
})
export class ExamModule {
}
