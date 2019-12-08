import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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
  answer: number;
  trueOption: number;
  point: number;
  options: Option[];
}

export class Subject {
  id: number;
  order: number;
  name: string;
  trueCount: number;
  falseCount: number;
  question_Count: number;
  blankCount: number;
  score: number;
  maxScore: number;
  questions: Question[];
}

export class ExamResult {
  name: string;
  type: string;
  code: string;
  date: Date;
  score: number;
  maxScore: number;
  questionCount: number;
  duration: number;
  price: number;
  trueCount: number;
  falseCount: number;
  blankCount: number;
  subjects: Subject[];
}

@Injectable({
  providedIn: 'root',
})
export class ExamResultService {

  examResult: ExamResult;

  private examSource = new BehaviorSubject<ExamResult>(this.examResult);
  examObserver = this.examSource.asObservable();

  constructor() {
  }

  generateRandomExamResult(): ExamResult {

    // Generate exam.
    const exam: ExamResult = {
      name: 'Exam Name',
      type: 'Exam Type',
      code: 'Exam Code',
      date: new Date(),
      duration: 0,
      price: 25,
      score: 0,
      maxScore: 0,
      trueCount: 0,
      falseCount: 0,
      blankCount: 0,
      questionCount: 0,
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
        trueCount: 0,
        falseCount: 0,
        blankCount: 0,
        score: 0,
        maxScore: 0,
        questions: [],
      };
      exam.subjects.push(subject);
      exam.questionCount += subject.question_Count;
    }

    // Generate questions.
    exam.subjects.forEach((subject, index) => {
      for (let i = 1; i <= subject.question_Count; i++) {
        const newQuestion: Question = {
          id: i,
          order: i,
          point: 4 + Math.floor(Math.random() * 3),
          answer: Math.floor(Math.random() * 5),
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

  calculateScore(examResult: ExamResult): ExamResult {
    examResult.score = 0;
    examResult.trueCount = 0;
    examResult.falseCount = 0;
    examResult.blankCount = 0;
    examResult.maxScore = 0;

    examResult.subjects.forEach(subject => {

      subject.score = 0;
      subject.trueCount = 0;
      subject.falseCount = 0;
      subject.blankCount = 0;
      subject.maxScore = 0;

      subject.questions.forEach(question => {
        if (question.trueOption === question.answer) {
          subject.score += question.point;
          subject.trueCount++;
        } else if (question.answer === null) {
          subject.blankCount++;
        } else {
          subject.falseCount++;
        }
        subject.maxScore += question.point;
      });

      examResult.score += subject.score;
      examResult.trueCount += subject.trueCount;
      examResult.falseCount += subject.falseCount;
      examResult.blankCount += subject.blankCount;
      examResult.maxScore += subject.maxScore;
    });

    return examResult;
  }

  getQuestion(questionOrder: number, questionSubject: string) {
    return this.examResult.subjects
      .find(subject => subject.name === questionSubject).questions
      .find(question => question.order === questionOrder);
  }
}
