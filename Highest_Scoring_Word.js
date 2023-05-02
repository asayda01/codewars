/*

6 kyu
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points 
according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, 
return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x) {

  let arr_words = x.split(" ");

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let max_score = 0;
  let str_result = "";



  for (let word of arr_words) {

    let letters_sum = 0;

    for (let letter of word) {
      letters_sum += alphabet.indexOf(letter) + 1;
    }

    if (letters_sum > max_score) {
      max_score = letters_sum;
      str_result = word;
    }
  }

  return str_result;

};