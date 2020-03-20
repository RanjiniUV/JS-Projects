import axios from "axios";
import store from '../../App';
import {displayCardsSuccess,displayCardsError} from '../Actions/index'
export default function fetchCards() {
    return axios.get("https://api.elderscrollslegends.io/v1/cards")
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

