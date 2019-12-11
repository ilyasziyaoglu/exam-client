import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export class Option {
  id: number;
  type: string;
  body: string;
  imageUrl: string;
  isTrue: boolean;
}

export class Question {
  id: number;
  order: number;
  body: string;
  options: Option[];
}

export class Subject {
  id: number;
  order: number;
  name: string;
  question_Count: number;
  questions: Question[];
}

export class Exam {
  name: string;
  type: string;
  code: string;
  date: Date;
  duration: number;
  price: number;
  subjects: Subject[];
}

@Injectable({
  providedIn: 'root',
})
export class LiveService {

  exam: Exam = {
    name: 'Exam Name',
    type: 'Exam Type',
    code: 'Exam Code',
    date: new Date(),
    duration: 125,
    price: 25,
    subjects: [
      {id: 1, name: 'Matematik', question_Count: 25, order: 1, questions: []},
      {id: 2, name: 'Fizik', question_Count: 10, order: 2, questions: []},
      {id: 3, name: 'Kimya', question_Count: 30, order: 3, questions: []},
      {id: 4, name: 'Ana Dili', question_Count: 40, order: 4, questions: []},
      {id: 5, name: 'Yabanci Dil', question_Count: 55, order: 5, questions: []},
    ],
  };

  private questionSource = new BehaviorSubject<any>({});
  currentQuestion = this.questionSource.asObservable();

  private subjectSource = new BehaviorSubject<any[]>(this.exam.subjects);
  subjectObservable = this.subjectSource.asObservable();

  private examSource = new BehaviorSubject<Exam>(this.exam);
  examObservable = this.examSource.asObservable();

  constructor() {
    this.exam = this.generateRandomQuestions(this.exam);
  }

  generateRandomQuestions(exam: Exam) {
    exam.subjects.forEach(subject => {

      for (let i = 1; i <= subject.question_Count; i++) {
        const newQuestion: Question = {
          id: i,
          order: i,
          body: 'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. ' +
            'Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak ' +
            'üzere bir yazı galerisini alarak karıştırdığı 1500\'lerden beri',
          options: [],
        };

        for (let j = 0; j < 5; j++) {
          newQuestion.options.push({
            id: i * 5 + j,
            type: '',
            body: 'Option',
            imageUrl: '',
            isTrue: false,
          });
        }

        newQuestion.options[Math.floor(Math.random() * 10 / 2)].isTrue = true;

        subject.questions.push(newQuestion);
      }
    });
    return exam;
  }

  getQuestion(i: number) {
    return {
      id: i,
      order: i,
      body: 'Bu ' + i + '. sorudur bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500\'lerden beri',
      options: [
        {
          body: 'perspiciatis',
          isTrue: false,
        },
        {
          body: 'nostrum',
          isTrue: true,
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

  changeCurrentQuestion(question: any) {
    this.questionSource.next(question);
  }

  changeQuestionOrder(order: number) {
    this.questionSource.next(this.getQuestion(order));
  }
}
