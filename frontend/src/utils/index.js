const partsOfSpeech = [
  ["n.", "noun"],
  ["prep.", "preposition"],
  ["a.", "adjective"],
  ["v.", "verb"],
  ["adv.", "adverb"],
  ["p.", "proverb"],
  ["interj.", "interjection"],
  ["conj.", "conjunction"],
  ["pron.", "pronoun"],
];

//RETURN SHORT VERSION OF THE POS FROM THE POS ARRAY
export function returnLongVersion(pos) {
  let longVersion;
  partsOfSpeech.map((fullVersionPos) => {
    if (fullVersionPos[0] === pos || fullVersionPos[1] === pos) {
      longVersion = fullVersionPos[1].toUpperCase();
    }
  });
  return longVersion;
}
