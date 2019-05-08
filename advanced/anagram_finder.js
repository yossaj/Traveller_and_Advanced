const AnagramFinder = function(word) {
 this.word = word
};

AnagramFinder.prototype.findAnagrams = function (list) {
  const letters = this.word.split('')
  show = []
  for( letter of letters ){
     show = list.find(word => word.includes(letter))
  }
  // console.log(shoe)
  return show
};

module.exports = AnagramFinder;
