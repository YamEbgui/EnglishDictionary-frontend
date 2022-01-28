const wordInserted = (word) => {
  return {
    type: "WORD_SEARCH",
    word,
  };
};

const wordSearchSucceed = (wordData) => {
  return {
    type: "WORD_SEARCH_SUCCEED",
    payload: wordData,
  };
};

const wordSearchFailed = (wordData) => {
  return {
    type: "WORD_SEARCH_FAILED",
  };
};

export { wordInserted, wordSearchSucceed, wordSearchFailed };
