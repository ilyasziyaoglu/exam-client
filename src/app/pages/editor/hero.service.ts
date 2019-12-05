import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private questionSource = new BehaviorSubject<any>({});
  currentQuestion = this.questionSource.asObservable();

  private subjectSource = new BehaviorSubject<any[]>([
    {name: 'Matematik', question_Count: 25, order: '1'},
    {name: 'Fizik', question_Count: 10, order: '2'},
    {name: 'Kimya', question_Count: 30, order: '3'},
    {name: 'Ana Dili', question_Count: 40, order: '4'},
    {name: 'Yabanci Dil', question_Count: 55, order: '5'},
  ]);
  currentSubject = this.subjectSource.asObservable();

  getQuestion(i: number) {
    return {
      id: i,
      order: i,
      body: 'Bu '+ i +'. sorudur bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500\'lerden beri',
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
  }

  constructor() { }

  changeQuestion(question: any) {
    this.questionSource.next(question);
  }
  changeQuestionOrder(order: number) {
    this.questionSource.next(this.getQuestion(order));
  }
}
