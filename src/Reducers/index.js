import { CARDS_ARE_FETCHING,CARDS_FETCH_DATA_SUCCESS,CARDS_FETCH_DATA_ERRORED,CARDS_FETCH_DATA_INFINTE_SCROLLING } from "../Constants/action-types";
  const initialState={
    isLoadingForInfiniteScrolling:false,
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

        case CARDS_FETCH_DATA_INFINTE_SCROLLING:
        let newObjForInfinitScrolling = Object.assign({}, state, {isLoadingForInfiniteScrolling : true});
        return newObjForInfinitScrolling;

        case CARDS_FETCH_DATA_SUCCESS:
          let count = state.pageCounter;
          let updatedCardObjArray = state.cards.concat(action.payload.cards);
          return {...state,cards :updatedCardObjArray, pageCounter:++count,isFetching: false,isLoadingForInfiniteScrolling : false, error: false};
        case CARDS_FETCH_DATA_ERRORED:
            return {...state, error: true, isFetching: false,error: true};
      default:
        return state
    }
  }