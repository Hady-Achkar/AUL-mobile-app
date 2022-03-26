import { applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from '../Types/redux';
import rootReducer, { AppState } from '../reducers';

export const initStore = () => {
  const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);
  const store = createStore(rootReducer, composedEnhancers);

  return store;
};
