module.exports = {
  mutate: [
    // 'src/gato.js',
    // 'src/cachorro.js',
    // 'src/carro.js',
    // 'src/getAboutUsLink.js',
    // 'src/person.js',
    'src/petOwner.js'
  ],
  reporters: ['html', 'clear-text'],
  testRunner: 'jest',
  jest: {
    enableFindRelatedTests: false
  }
}