import axios from "axios";

const wordRequest = async (word) => {
  try {
    const response = await axios.get(`http://localhost:3001/word/${word}`);
    return response;
  } catch (error) {
    return null;
  }
};

export const wordSearch = async (word) => {
  return wordRequest(word);
};

export const returnValueOfOneWord = (data) => {
  if (Array.isArray(data)) {
    return data[Math.floor(Math.random() * data.length)];
  }
  return data;
};
