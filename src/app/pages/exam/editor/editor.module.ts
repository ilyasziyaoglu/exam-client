import {NgModule} from '@angular/core';
import {EditorRoutingModule} from './editor-routing.module';
import {EditorComponent} from './editor.component';
import {ExamEditorComponent} from './exam-editor/exam-editor.component';
import {QuestionEditorComponent} from './question-editor/question-editor.component';
import {NbAccordionModule, NbCardModule} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    EditorComponent,
    ExamEditorComponent,
    QuestionEditorComponent,
  ],
  imports: [
    EditorRoutingModule,
    NbCardModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    NbAccordionModule,
    MatSelectModule,
  ],
})
export class EditorModule { }
