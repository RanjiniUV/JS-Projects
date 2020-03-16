const initialState={
    cards:[],
    isFetching: false
};

 export default function displayCardReducer(state = initialState, action) {
    switch (action.type) {
      case 'CARDS_ARE_FETCHING':
        return Object.assign({}, state, {
          isFetching: true
        })
        case 'CARDS_FETCH_DATA_SUCCESS':
            return {...state, items: action.payload , areFetching: false};
        case 'CARDS_FETCH_DATA_ERRORED':
            return {...state, error: true, areFetching: false};
      default:
        return state
    }
  }