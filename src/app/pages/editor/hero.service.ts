import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private questionSource = new BehaviorSubject<any>({});
  currentQuestion = this.questionSource.asObservable();

  constructor() { }

  changeQuestion(question: any) {
    this.questionSource.next(question);
  }
}
