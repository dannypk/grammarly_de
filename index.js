const wordLookup = require('./grammar/word-lookup.js');

async function getGenderForWords() {
  await wordLookup.getWordGender('Essen');
}

getGenderForWords();
