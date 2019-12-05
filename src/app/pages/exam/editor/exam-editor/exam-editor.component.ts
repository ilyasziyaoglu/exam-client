import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Exam, ExamService} from '../exam-service/exam.service';

@Component({
  selector: 'ngx-exam-editor',
  templateUrl: './exam-editor.component.html',
  styleUrls: ['./exam-editor.component.scss'],
})
export class ExamEditorComponent implements OnInit {

  generalExamInfoEditMode = true;
  examProperties: string[] = ['name', 'type', 'date', 'time', 'duration', 'price'];
  examPropertyTypes: string[] = ['text', 'text', 'date', 'time', 'time', 'number'];
  examGeneralInfoForm = this.fb.group({
    name: [, Validators.required],
    type: [, Validators.required],
    date: [, Validators.required],
    time: [, Validators.required],
    duration: [, Validators.required],
    price: [, Validators.required],
  });

  subjects: any[];

  subjectProperties: string[] = ['name', 'question_Count', 'order'];
  subjectPropertyTypes: string[] = ['text', 'number', 'number'];
  subjectsForm = this.fb.group({
    name: [, Validators.required],
    question_Count: [, Validators.required],
    order: [, Validators.required],
  });
  questions: any[] = [];
  optionLabels: string[] = ['A) ', 'B) ', 'C) ', 'D) ', 'E) '];
  private exam: Exam;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
  ) {
  }

  ngOnInit() {

    this.examService.currentSubject.subscribe(subject => {
      this.subjects = subject;
    });

    this.examService.examObserver.subscribe(exam => {
      this.exam = exam;
      this.questions = exam.subjects[0].questions;
    });
  }

  onSubmitExamGeneralInfo() {
    if (this.examGeneralInfoForm.valid) {
      this.generalExamInfoEditMode = false;
      // save exam general info to db
    } else {
      this.examGeneralInfoForm.markAllAsTouched();
    }
  }

  onSubmitSubjects() {
    // save to db
  }

  onSubmitNewSubject() {
    const self = this;
    if (self.subjectsForm.valid) {
      const newSubject = {
        name: self.subjectsForm.get('name').value,
        question_Count: self.subjectsForm.get('question_Count').value,
        order: self.subjectsForm.get('order').value,
      };

      self.subjects.push(newSubject);
      self.subjectsForm.reset();
    } else {
      this.subjectsForm.markAllAsTouched();
    }
  }

  removeSubject(subject) {
    const self = this;
    self.subjects = self.subjects.filter(value => subject.name !== value.name);
  }

  onSubjecChanged(subject: any) {
    // filter questions to show
  }

  onQuestionDelete(question) {
    const self = this;
    Swal.fire({
      title: 'Warning',
      icon: 'warning',
      text: 'Are you sure to delete this question?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        self.questions = self.questions.filter(value => value.id !== question.id);
        Swal.fire(
          'Deleted!',
          'Question has been deleted.',
          'success',
        );
      }
    });
  }

  onAddNewQuestion() {

  }

  onQuestionEdit(question) {
    this.examService.changeQuestion(question);
  }
}
