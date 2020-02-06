import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LiveService} from '../live-service/live.service';
import {Exam} from '../../editor/exam-service/exam.service';

@Component({
  selector: 'ngx-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  question: any;
  subjects: any[];
  currentPage: number;
  correctAnswerOrder: number;
  pages = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];
  private exam: Exam;

  constructor(
    private liveService: LiveService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.liveService.subjectObservable.subscribe(subjects => {
      this.subjects = subjects;
    });

    this.liveService.currentQuestion.subscribe(question => {
      this.question = question;
      this.currentPage = question.order;
    });

    this.liveService.examObservable.subscribe(exam => {
      this.exam = exam;
    });
  }

  getArr(num: number) {
    return new Array(num);
  }

}
