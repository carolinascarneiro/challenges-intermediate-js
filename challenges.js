// reverseArray()

// Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

// There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

// Naive solution

// const reverseArray = (array) => {
//     let ind = 0;
//     let newSentence = [];
//     for (let i = sentence.length-1; i >= 0;  i--) {
//       newSentence[ind]=sentence[i];
//       ind++;
//     }
//     return newSentence;
//   }

// Solution with unpush

const reverseArray = (array) => {
    console.log(array.length)
    array.unshift(i);
    console.log(array.length)
    for (let i = array.length; i >= 0; i--) {
      array.unshift(i);
      console.log(array.length);
      array.pop();
    }
    return array;
  }
  
  const sentence = [1, 2, 3, 4, 5];
  
  console.log(reverseArray(sentence))