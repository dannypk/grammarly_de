const wordLookup = require('./word-lookup.js');

describe('WordLookup spec', () => {
  describe('when the word is feminine', () => {
    it('should return feminine', async () => {
      const gender = await wordLookup.getWordGender('Katze');
      expect(gender).toBe('feminin');
    });
  });

  describe('when the word is maskulin', () => {
    it('should return maskulin', async () => {
      const gender = await wordLookup.getWordGender('motor');
      expect(gender).toBe('maskulin');
    });
  });

  describe('when the word is neutrum', () => {
    it('should return neutrum', async () => {
      const gender = await wordLookup.getWordGender('essen');
      expect(gender).toBe('neutrum');
    });
  });

  describe('when the word is in plural and doesnt match', () => {
    it('should return null', async () => {
      const gender = await wordLookup.getWordGender('katzen');
      expect(gender).toBeNull();
    });
  });

  describe('when the word is an adjective', () => {
    it('should return null', async () => {
      const gender = await wordLookup.getWordGender('schön');
      expect(gender).toBeNull();
    });
  });
});
