const initialState = {
  pos: "p.",
  word: "CHAPED",
  definitions: ["Furnished with a chape or chapes. [Obs.] Chaucer."],
};

const wordReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "WORD_SEARCH_SUCCEED":
      return action.payload;
    case "WORD_SEARCH_FAILED":
      return {
        word: "SEARCH FAILED",
        pos: "",
        definitions: "try other word",
      };
    default:
      return state;
  }
};

export default wordReducer;
