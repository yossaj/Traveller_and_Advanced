const AnagramFinder = function(word) {
 this.word = word
};

AnagramFinder.prototype.findAnagrams = function (list) {
  const letters = this.word.split('')
  let counter = 0
  for( letter of letters ){
    if(list[0].includes(letter)){
      counter += 1
    }
  }
  return counter
};

module.exports = AnagramFinder;
