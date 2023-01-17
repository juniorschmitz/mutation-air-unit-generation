var PersonTestable = (function () {
  var chew = function () { console.log("chew"); },
  swallow = function () { console.log("swallow"); },
  eat = function () {
    for (var i = 0, len = 10; i < len; i++) {
      chew();
    }
    swallow();
  };

  return {
      eat: eat,
      chew: chew,
      swallow: swallow
  };
}());

module.exports = PersonTestable;
