import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

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

  subjects: any[] = [
    {name: 'Matematik', question_Count: '25', order: '1'},
    {name: 'Fizik', question_Count: '25', order: '2'},
    {name: 'Kimya', question_Count: '25', order: '3'},
    {name: 'Ana Dili', question_Count: '25', order: '4'},
    {name: 'Yabanci Dil', question_Count: '25', order: '5'},
  ];
  subjectProperties: string[] = ['name', 'question_Count', 'order'];
  subjectPropertyTypes: string[] = ['text', 'number', 'number'];
  subjectsForm = this.fb.group({
    name: [, Validators.required],
    question_Count: [, Validators.required],
    order: [, Validators.required],
  });
  questions: any[] = [];
  optionLabels: string[] = ['A) ', 'B) ', 'C) ', 'D) ', 'E) '];

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    for (let i = 1; i <= 25; i++) {

      const newQuestion = {
        id: i,
        order: i,
        body: 'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500\'lerden beri',
        options: [
          {
            body: 'perspiciatis',
            isTrue: false,
          },
          {
            body: 'nostrum',
            isTrue: false,
          },
          {
            body: 'tempor',
            isTrue: false,
          },
          {
            body: 'painful',
            isTrue: false,
          },
          {
            body: 'eos',
            isTrue: false,
          },
        ],
      };

      newQuestion.options[Math.floor(Math.random() * 10 / 2)].isTrue = true;

      this.questions.push(newQuestion);

    }
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
}
