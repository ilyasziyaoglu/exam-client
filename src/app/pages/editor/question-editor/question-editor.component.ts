import {Component, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ngx-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
})
export class QuestionEditorComponent implements OnInit {

  question: any;

  newOption() {
    this.question.options.push(
      {
        body:"",
        isTrue: false
      }
    )
  }

  currentPage: number;
  pages=[
    1,2,3,4,5,6
  ]

  deleteOption(i: number) {
    this.question.options.splice(i);
  }

  // question = {
  //   body: 'asdjkashf jkahkfj njaksbnfas',
  //   options: [
  //     {
  //       body: 'asdasdbaskjdb',
  //       isTrue: false,
  //     },
  //     {
  //       body: 'asdasdbaskjdb',
  //       isTrue: false,
  //     },
  //   ],
  // };

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    // this.data.currentQuestion.subscribe(question => {
    //   this.question = question;
    //   console.log(question);
    // } );

    this.heroService.currentQuestion
        .subscribe(question => {
          this.question = question;
          console.log(this.question);
          this.currentPage = question.order;
        });

    
  }

  // getHeroes(): void {
  //   this.heroService.currentQuestion
  //       .subscribe(question => this.question = question);
  // }

}
