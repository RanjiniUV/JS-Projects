import axios from "axios";

export function fetchCards () {
   
      return axios.get("https://api.elderscrollslegends.io/v1/cards")
        .then(({ data }) => {
        //dispatch(setArticleDetails(data));
        console.log("Show the data", data);
      });
    
  }