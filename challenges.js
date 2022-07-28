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








//   Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

// You can test your function when you’re ready by passing in the years array or by making your own array of years!

// Write your code here:
const sortYears = array => array.sort().reverse();

// Feel free to uncomment the below code to test your function:
/**/
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]








// .
// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

// let arr1 = ['this', 'not this', 'nor this'];
// let arr2 = ['thing 1', 'thing 2', 'this'];
 
// justCoolStuff(arr1, arr2); // Should return ['this']
// You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!

// Write your code here:
const justCoolStuff = (coolStuff, myStuff) => {
    return coolStuff.filter(word => myStuff.includes(word));
  }
  
  // Feel free to uncomment the code below to test your function
  /**/
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]





  

//   1.
// Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

// {name: 'cabbage', source: 'plant' }
// and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

// const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
// isTheDinnerVegan(meal); // Should return true
// You can test your function when you’re ready by passing in the dinner array or by making your own!

// Write your code here:

const isTheDinnerVegan = array => {
    for (let i = 0; i < array.length ; i++) {
      for (let j = 0; j < array.length ; j++) {
        array[i]['source'] !== 'plant' ? false : true;
      }
    }
  }
  
  // Feel free to comment out the code below to test your function
  /**/
  // const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
  
  console.log(isTheDinnerVegan(meal))
  // Should print false
  




// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }
// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

// You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, or use an anonymous function for your argument to .sort().

// You can test your function when you’re ready by passing in the speciesArray array or by making your own!

const speciesArray = [
    { speciesName: "shark", numTeeth: 50 },
    { speciesName: "dog", numTeeth: 42 },
    { speciesName: "alligator", numTeeth: 80 },
    { speciesName: "human", numTeeth: 32 },
  ];
  
  const sortSpeciesByTeeth = (speciesArray) => {
    array = [];
    for (let i = 0; i < speciesArray.length; i++) {
      array[i] = speciesArray[i]["numTeeth"];
    }
  
    array.sort();
  
    sortedArray = [];
    for (let i = 0; i < speciesArray.length; i++) {
      sortedArray[i] = speciesArray.find((item) => item.numTeeth === array[i]);
    }
    return sortedArray;
  };
  console.log(sortSpeciesByTeeth(speciesArray));






  /*
  Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array!
  */

const findMyKeys = array => {
    return array.findIndex(element => element === 'keys')
  }
  
  // Feel free to comment out the code below to test your function
  /**/
  const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
  
  console.log(findMyKeys(randomStuff))




  /*
  Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function.
  */

const factorial = num => {
    for (let i = num-1; i > 0; i--) {
      num = num * i;
    }
    return num
  }

//   Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

//   Examples:
  
//   subLength('Saturday', 'a'); // returns 6
//   subLength('summer', 'm'); // returns 2
//   subLength('digitize', 'i'); // returns 0
//   subLength('cheesecake', 'k'); // returns 0

// Write function below
const subLength = (st, ch) => {
    array = []
    for (let i = 0; i < st.length; i++) {
      if (st[i] === ch) {
        array.push(i);
      }
    }
    return array.length > 2 ||  array.length < 2? 0 : (array[1] - array[0])+1;
  }
  
  console.log(subLength('uncopyrightable', 'u'))






  /*
  Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'*/

const groceries = items => {
    let s = ''
    for (let i = 0; i < items.length ; i++) {
      if (items.length == 1) {
        return items[i]['item'];
      }
      else if (i == items.length-2) {
        s += items[i]['item'] + " and " + items[i+1]['item'];
        return s;
      }
      s += items[i]['item'] + ", "
    }
    return s;
  }