import { wordInserted, wordSearchSucceed, wordSearchFailed } from "../actions";
import { wordSearch, returnValueOfOneWord } from "./search";

export const wordMiddleware = (word) => async (dispatch, getState) => {
  console.log(word);
  dispatch(wordInserted());
  const response = await wordSearch(word);
  console.log(response);
  if (response !== null) {
    const wordData = response.data;
    console.log(wordData);
    dispatch(wordSearchSucceed(returnValueOfOneWord(wordData)));
    return;
  } else {
    console.log(response);
    dispatch(wordSearchFailed());
    return;
  }
};
