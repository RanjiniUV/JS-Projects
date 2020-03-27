import axios from "axios";
import store from '../App';
import {displayCardsSuccess,displayCardsError} from '../Actions/index';
import {PAGE_SIZE_COUNT} from '../Constants/api-params';
export default function fetchCards(pageCounter) {
  const config = {
    method: 'get',
    url: `https://api.elderscrollslegends.io/v1/cards/?pageSize=${PAGE_SIZE_COUNT}&page=${pageCounter}`
}

    return  axios(config)
  .then((response) => {onSuccessfulFetch(response)})
                    .catch(err => {
                      {onFailure(err)}
                    });
 
}

function onSuccessfulFetch(response){
  return store.dispatch(displayCardsSuccess(response.data));
}

function onFailure(error){
  return store.dispatch(displayCardsError(error));
}

