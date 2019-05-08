const PangramFinder = function(word) {
 this.word = word
};

PangramFinder.prototype.isPangram = function () {
const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const str = this.word
var value = 0;

    arr.forEach((letter) =>{
      value = value + str.includes(letter);
    });
    return (value === 26)
};


module.exports = PangramFinder;
