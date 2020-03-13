import { iS_FETCHING } from "../Constants/action-types";

export function displayCard(payload) {
    return { type: "SHOW_CARDS", payload }
  };