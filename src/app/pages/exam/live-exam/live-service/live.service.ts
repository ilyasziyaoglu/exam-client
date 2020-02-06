import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export class Option {
  id: number;
  type: string;
  body: string;
  imageUrl: string;
}

export class Question {
  id: number;
  order: number;
  body: string;
  trueOption: number;
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

  exam: Exam;

  private questionSource = new BehaviorSubject<any>({});
  currentQuestion = this.questionSource.asObservable();

  private subjectSource = new BehaviorSubject<any[]>(this.exam.subjects);
  subjectObservable = this.subjectSource.asObservable();

  private examSource = new BehaviorSubject<Exam>(this.exam);
  examObservable = this.examSource.asObservable();

  constructor() {
    this.exam = this.generateRandomExam();
  }


  generateRandomExam(): Exam {

    // Generate exam.
    const exam: Exam = {
      name: 'Exam Name',
      type: 'Exam Type',
      code: 'Exam Code',
      date: new Date(),
      duration: 0,
      price: 25,
      subjects: [],
    };

    // Generate subjects.
    const subjects = ['Matematik', 'Kimya', 'Fizik', 'Ana Dili', 'Yabanci Dil'];
    for (let i = 0; i < subjects.length; i++) {
      const subject: Subject = {
        id: i + 1,
        name: subjects[i],
        question_Count: Math.floor(Math.random() * 40),
        order: i + 1,
        questions: [],
      };
      exam.subjects.push(subject);
    }

    // Generate questions.
    exam.subjects.forEach((subject, index) => {
      for (let i = 1; i <= subject.question_Count; i++) {
        const newQuestion: Question = {
          id: i,
          order: i,
          trueOption: Math.floor(Math.random() * 5),
          body: 'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. ' +
            'Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak ' +
            'üzere bir yazı galerisini alarak karıştırdığı 1500\'lerden beri',
          options: [],
        };

        for (let j = 0; j < 5; j++) {
          newQuestion.options.push({
            id: index * subject.question_Count + i * 5 + j,
            type: '',
            body: 'Option',
            imageUrl: '',
          });
        }

        subject.questions.push(newQuestion);
      }
    });
    return exam;
  }

  getQuestion(i: number): Question {
    return this.exam.subjects[0].questions.sort((a, b) => a.order - b.order)[i];
  }

  changeCurrentQuestion(question: any) {
    this.questionSource.next(question);
  }

  changeQuestionOrder(order: number) {
    this.questionSource.next(this.getQuestion(order));
  }
}
