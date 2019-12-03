import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
})
export class QuestionEditorComponent implements OnInit {

  page = 1;

  newOption() {
    this.question.options.push(
      {
        body:"",
        isTrue: false
      }
    )
  }

  currentPage=3;
  pages: [
    1,2,3,4,5,6
  ]

  deleteOption(i: number) {
    this.question.options.splice(i);
  }

  question = {
    body: 'asdjkashf jkahkfj njaksbnfas',
    options: [
      {
        body: 'asdasdbaskjdb',
        isTrue: false,
      },
      {
        body: 'asdasdbaskjdb',
        isTrue: false,
      },
    ],
  };

  constructor() {
  }

  ngOnInit() {
  }

}
