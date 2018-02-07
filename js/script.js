$(document).ready(function() {
$("#start").click(function () {
function translatePigLatin(str) {
    

  var vowels = ['a','e','i','o','u','A','E','I','O','U'];
  var slicedArr = [];
  var newStr = '';

  if (vowels.indexOf(str[0]) >= 0) { // First letter is a vowel, translate immediately
    return str + 'way';
  }

  for (var i=0; i<str.length; i++){
    if (vowels.indexOf(str[i]) >= 0) { // Vowel
      return newStr + slicedArr.join("") + 'ay';
    } else { // Consonant
      // Keep slicing from string until you hit a vowel
      slicedArr.push(str[i]);
      newStr = str.slice(i+1);
    }
  }

}
$("#Result").html(translatePigLatin($("#trans").val()));
});

});