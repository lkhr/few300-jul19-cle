import { Component, OnInit } from '@angular/core';
import { MathState, selectAtEndOfQuestions, selectHideScores, selectUIHasError } from './reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSavedScores } from './actions/saved-scores.actions';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  hideScores$: Observable<boolean>;
  hasError$: Observable<boolean>;
  constructor(private store: Store<MathState>) { }

  ngOnInit() {
    this.hideScores$ = this.store.select(selectHideScores);
    this.hasError$ = this.store.select(selectUIHasError);
    this.store.dispatch(loadSavedScores());
  }

}
