import { Action } from '@ngrx/store';
import { PreviewActions, PreviewActionTypes } from '../actions/preview.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: PreviewActions): State {
  switch (action.type) {

    case PreviewActionTypes.LoadPreviews:
      return state;


    default:
      return state;
  }
}
