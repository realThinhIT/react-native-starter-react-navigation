import { 
  combineReducers, 
  createStore,
  applyMiddleware 
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaEffects from '../saga';

import exampleReducer from './example';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    example: exampleReducer
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagaEffects);