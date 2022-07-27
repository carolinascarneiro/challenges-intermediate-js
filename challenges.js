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

// Solution with push plus slice (array methods)

const reverseArray = (array) => {
    for (let i = array.length-1; i >= 0; i--) {
        array.push(array[i]);
    }
    return array.slice(array.length/2);
}

// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”

const greetAliens = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`);
    }
  }

// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

// const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
// convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const convertToBaby = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = 'baby ' + array[i];
  }
  return array;
}
