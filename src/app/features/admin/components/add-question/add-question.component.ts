import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MathState } from 'src/app/features/math/reducers';
import { AddQuestionModel } from 'src/app/features/math/models';
import * as actions from '../../../math/actions/questions.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  name = new FormControl('');
  @Input() addQuestionModel: AddQuestionModel = {
    question: '',
    answer: 0
  };

  saved = false;
  constructor(private store: Store<MathState>) { }

  ngOnInit() {
  }

  saveQuestion(question: string, answer: number) {
    this.store.dispatch(actions.saveQuestion(question, answer));
    this.saved = true;
  }

}
