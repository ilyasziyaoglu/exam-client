import {Component, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ngx-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
})
export class QuestionEditorComponent implements OnInit {

  question: any;
  subjects: any[];
  currentPage: number;
  pages=[1,2,3,4,5,6];

  constructor(private heroService: HeroService) {}

  newOption() {
    this.question.options.push({body:"", isTrue: false});
  }

  deleteOption(i: number) {
    this.question.options.splice(i);
  }

  getArr(num: number) {
    return new Array(num);
  }

  goToQuestion(order: number) {
    this.heroService.changeQuestionOrder(order);
  }

  ngOnInit() {
    this.heroService.currentSubject.subscribe(subjects => {
      this.subjects = subjects;
      console.log(subjects);
    });

    this.heroService.currentQuestion.subscribe(question => {
          this.question = question;
          console.log(this.question);
          this.currentPage = question.order;
        });
  }

}
