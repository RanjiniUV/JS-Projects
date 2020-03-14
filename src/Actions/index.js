import { CARDS_ARE_FETCHING } from "../Constants/action-types";
import {fetchCards} from '../API/index';

 export default function displayCards() {
    fetchCards();
    return {
        type: "CARDS_ARE_FETCHING"
    }
}

function displayCardsSuccess() {
    
    return {
        type: "CARDS_FETCH_DATA_SUCCESS",
            data: response.data
}
}

function displayCardsError() {
    return {
        type: "CARDS_FETCH_DATA_ERRORED",
        error: response.error
    }
}