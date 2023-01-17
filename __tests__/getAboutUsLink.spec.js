const getAboutUsLink = require('../src/getAboutUsLink')

describe('Get About Us Link Redirect', () => {
  test('Returns the correct link for English', () => {
    expect(getAboutUsLink('en-US')).toBe('/about-us');
  });

  test('Returns the correct link for Spanish', () => {
    expect(getAboutUsLink('es-ES')).toBe('/acerca-de');
  });

  test('Returns an empty string for a language not supported', () => {
    expect(getAboutUsLink('de-DE')).toBe('');
  });
});
