const AnagramFinder = function(word) {
 this.word = word
};

AnagramFinder.prototype.findAnagrams = function (list) {
  const letters = this.word.split('')
  anas = list.filter(item => item.includes(this.word))
  return anas
};

module.exports = AnagramFinder;
