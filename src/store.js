import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';
const initialState={
  pageCounter : 1,
  cards:[],
  isFetching: false,
  error: false
};

export default function configureStore(initialState){
    return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
   );
   }