import {Component, OnInit} from '@angular/core';
import {Exam, ExamService} from '../exam-service/exam.service';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'ngx-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
})
export class QuestionEditorComponent implements OnInit {

  question: any;
  subjects: any[];
  currentPage: number;
  correctAnswerOrder: number;
  pages = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];
  private exam: Exam;

  constructor(
    private examService: ExamService,
    private fb: FormBuilder,
  ) {
  }

  subjectSelect = new FormControl('');

  newOption() {
    this.question.options.push({body: '', isTrue: false});
  }

  deleteOption(i: number) {
    this.question.options.splice(i,1);
  }

  getArr(num: number) {
    return new Array(num);
  }

  goToQuestion(order: number) {
    this.examService.changeQuestionOrder(order);
  }

  correctOptionClick(i: number) {
    for(let option of this.question.options) {
      option.isTrue = false;
    }
    this.question.options[i].isTrue = true;
  }

  ngOnInit() {
    this.examService.currentSubject.subscribe(subjects => {
      this.subjects = subjects;
    });

    this.examService.currentQuestion.subscribe(question => {
      this.question = question;
      this.currentPage = question.order;
    });

    this.examService.examObserver.subscribe(exam => {
      this.exam = exam;
    });
  }

  onChangeSubject() {

  }
}
