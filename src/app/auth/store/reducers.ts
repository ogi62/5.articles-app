import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

// for exporting need to type like this 
export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}
