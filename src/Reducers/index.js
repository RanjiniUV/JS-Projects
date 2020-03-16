import { combineReducers } from 'redux';
import displayCardReducer from './Reducer';
const initialState={
  cards:[],
  isFetching: false
};

const rootReducer = combineReducers({
  displayCardReducer
})
  export default rootReducer;