import {Component, OnInit} from '@angular/core';
import {ExamResult, ExamResultService} from './exam-result.service';

@Component({
  selector: 'ngx-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

  examResult: ExamResult;
  options: string[] = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    private examResultService: ExamResultService,
  ) {
  }

  ngOnInit() {
    this.examResultService.examObserver.subscribe(examResult => {
      this.examResult = examResult;

      this.examResult = this.examResultService.generateRandomExamResult();
      this.examResult = this.examResultService.calculateScore(this.examResult);
    });
  }

}
