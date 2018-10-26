const DudenSearchApi = require('duden-search-api');
const WORD_TYPES = require('../constants/word-types.const');

class WordLookup {
  constructor() {
    this.duden = new DudenSearchApi();
  }

  searchForWord(word) {
    return this.duden.search(word);
  }

  checkFirstThreeResultsForSubstantive(definitions, word) {
    if (definitions.length > 0) {
      return definitions.slice(0, 3).find(definition => definition.wordProperties.type === WORD_TYPES.SUBSTANTIVE
        && definition.text.toLowerCase() === word.toLowerCase());
    }

    return null;
  }

  async getWordGender(word) {
    const searchResults = await this.searchForWord(word);
    const matchingWord = this.checkFirstThreeResultsForSubstantive(searchResults, word);

    if (matchingWord) {
      const { wordProperties } = matchingWord.wordProperties;
      return wordProperties.genus.toLowerCase();
    }

    return null;
  }
}

module.exports = new WordLookup();
