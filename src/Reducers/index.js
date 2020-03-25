import { CARDS_ARE_FETCHING,CARDS_FETCH_DATA_SUCCESS,CARDS_FETCH_DATA_ERRORED } from "../Constants/action-types";
  const initialState={
    pageCounter : 1,
  cards:[],
  isFetching: false,
  error: false
};

 export default function displayCardReducer(state = initialState,action) {
    switch (action.type) {
      case CARDS_ARE_FETCHING:
        let newObj = Object.assign({}, state, {isFetching: true, error: false});
        return newObj;
        case CARDS_FETCH_DATA_SUCCESS:
          let count = state.pageCounter;
            return {...state, cards: action.payload.cards ,pageCounter:++count, isFetching: false,error: false};
        case CARDS_FETCH_DATA_ERRORED:
            return {...state, error: true, isFetching: false,error: true};
      default:
        return state
    }
  }