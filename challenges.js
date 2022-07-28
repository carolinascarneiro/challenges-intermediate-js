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

// We wrote a function, smallestPowerOfTwo(), which takes in an array.

// Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results.

// It’s not doing what we want. Can you fix our code, please?

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            g = 1;
            while (g < number) {
                  g = g * 2;
            }
            results.push(g);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers))

// 1.
// Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

// The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

// You can test your function when you’re ready by passing in the veggies array or by making your own array!

// 2.
// Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

// You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = (array) => {
  array.forEach(politelyDecline);
}

const acceptOne = (veg) => {
      console.log('Ok, I guess I will eat some ' + veg +'.');
}

const acceptEverything = (array) => {
      array.forEach(acceptOne);
}

// Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// You can test your function when you’re ready by passing in the numbers array or by making your own array!

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = array => {

const map1 = array.map(toSquare);

return map1;

}

console.log(squareNums(numbers))

// 1.
// Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

// You can use any technique you want to accomplish this task.

// You can test your function when you’re ready by passing in the greetings array or by making your own array!

// Write your code here:

// Naive solution
// const shoutGreetings = array => {
//     for (let i = 0; i < array.length; i++) {
//       array[i] = array[i].toUpperCase() + "!";
//     }
//     return array;
//   }

//   Solution with map
const shoutGreetings = array => {
    const map1 = array.map(x => x.toUpperCase() + "!");
    return map1;
}
  
  // Feel free to uncomment out the code below to test your function!
  /**/
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  