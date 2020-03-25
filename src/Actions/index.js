import { CARDS_ARE_FETCHING,CARDS_FETCH_DATA_SUCCESS,CARDS_FETCH_DATA_ERRORED } from "../Constants/action-types";
import fetchCards from '../API/index';

export function displayCards() {

          return {
            type: CARDS_ARE_FETCHING
    
        }
}

export function displayCardsSuccess(payload) {
    return {
        type: CARDS_FETCH_DATA_SUCCESS,
        payload: payload
    }
}

export function displayCardsError(error) {
    return {
        type: CARDS_FETCH_DATA_ERRORED,
        error: error
    }
}

export function fetchCardsForDisplay(pageCounter){
    
    
              fetchCards(pageCounter);
            
    
}
