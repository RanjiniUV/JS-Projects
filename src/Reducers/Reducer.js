import initialState from '../Store/index';

  function displayCard(state = initialState, action) {
    switch (action.type) {
      case 'SHOW_CARDS':
        return Object.assign({}, state, {
          isFetching: action.isFetching
        })
      default:
        return state
    }
  }