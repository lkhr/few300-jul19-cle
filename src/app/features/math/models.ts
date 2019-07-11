export interface QuestionModel {
  num: number;
  of: number;
  question: string;
}

export interface ScoresModel {
  scores: ScoresLineModel[];
  numberOfQuestions: number;
  numberCorrect: number;
  numbersWrong: number;
}
interface ScoresLineModel {
  num: number;
  question: string;
  answer: number;
  incorrect: boolean;
  provideAnswer: number;
}
