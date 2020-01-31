"use strict";
const str = 'The quick brown fox jumps over the lazy dog.';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const word_counts = {};

  for(const word of phrase.split(' ')){
    if (word_counts.hasOwnProperty(word)){
      word_counts[word] += 1;
    }else{
      word_counts[word] = 1;
    }
  }
  return word_counts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonsPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (melonsPrices.hasOwnProperty(price)){
    return melonsPrices[price];

  } 
}
