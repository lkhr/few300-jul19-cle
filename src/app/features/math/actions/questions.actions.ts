import { createAction, props } from '@ngrx/store';
import { SaveQuestionModel } from '../models';

export const answerProvided = createAction(
  '[math] answer provided',
  props<{ guess: number }>()
);

export const questionSaved = createAction(
  '[add-question] question saved',
  props<{ id: number, question: string, answer: number }>()
);

export const playAgain = createAction(
  '[math] play again'
);

let currentId = 50_000;
export const saveQuestion = createAction(
  '[add-question] save question',
  (question: string, answer: number) => {
    const newQuestion: SaveQuestionModel = {
      question,
      answer,
      id: currentId++
    };
    return { payload: newQuestion };
  });
