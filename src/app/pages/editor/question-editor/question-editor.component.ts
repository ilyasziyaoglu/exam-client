import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss'],
})
export class QuestionEditorComponent implements OnInit {

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
      {
        body: 'asdasdbaskjdb',
        isTrue: true,
      },
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
