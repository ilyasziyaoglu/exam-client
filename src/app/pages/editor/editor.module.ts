import {NgModule} from '@angular/core';
import {EditorRoutingModule} from './editor-routing.module';
import { ExamEditorComponent } from './exam-editor/exam-editor.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import {NbCardModule} from '@nebular/theme';
import {FormsModule} from '@angular/forms';
import {EditorComponent} from './editor.component';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
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
    MatTableModule,
    MatTabsModule,
  ],
  declarations: [
    EditorComponent,
    ExamEditorComponent,
    QuestionEditorComponent,
  ],
})
export class EditorModule {
}
