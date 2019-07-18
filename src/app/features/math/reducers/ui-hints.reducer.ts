import { Action } from '@ngrx/store';

export interface UIHintsState {
  hasError: boolean;
  errorMessage: string;
}

const initialState: UIHintsState = {
  hasError: true,
  errorMessage: 'this is broke'
};

export function reducer(state: UIHintsState = initialState, action: Action) {
  switch (action.type) {
    case '[math] save scored failed': {
      return {
        hasError: true,
        errorMessage: 'Could not save scores.  Sorry, Jill. Quit Cheating!!'
      };
    }

    default: {
      return state;
    }
  }
}
