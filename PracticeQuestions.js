////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function SumPlusX(num1, num2) {
  let sum = num1 + num2 + x;
  return sum;
}

console.log("Q1: ", SumPlusX(5, 3));

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const SumPlusXArrow = (num1, num2) => {
  let sum = num1 + num2;
  return [sum, x];
};

console.log("Q2: ", SumPlusXArrow(2, 3));

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 3. Write a function that returns another function. (use arrow functions please)

const SumPlusXArrowCallback = (num1, num2) => SumPlusXArrow(num1, num2);

console.log("Q3: ", SumPlusXArrowCallback(1, 9));

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(
  "Q4: ",
  getFunction()(2),
  " getFunction still has access to variable y because it is a closure (function within a function) resulting in insideFunc having access to the lexical environment / outer environment (everything inside getFunction in this case)"
);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 5.a. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const HandleErrors = () => {
  try {
    let message = couldThrowError();
    console.log("Result: ", message);
  } catch (error) {
    console.log("Result: ", error.message);
    console.log("sorry, there was an error");
  }
};

console.log("Q5.a: ");
HandleErrors();

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5.b. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const FaveFoodCount = userData.map((user) => {
  return { id: user.id, favoriteFoods: user.favorites.food.length };
});

console.log("Q5.b: ", FaveFoodCount);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const PizzaLovers = userData.reduce((acc, curr) => {
  if (curr.favorites.food.includes("pizza")) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log("Q6: ", PizzaLovers);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 7. Show an an example of a switch statement being used

const sayHello = (name) => {
  switch (name) {
    case "Fergus":
      return "hello Fergus";
      break;
    case "Jill":
      return "hello Jill";
      break;
    case "Corey":
      return "hello Corey";
      break;
    default:
      return `Identify yoursefl stranger!`;
  }
};

console.log("Q7: ", sayHello("Fergus"));

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combinedData = { ...userPersonalData, ...userGameData };
console.log("Q8: ", combinedData);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 9. Make a copy of your new user object but override the birthday to december 31st

const newNewCombinedData = { ...combinedData, birthday: "dec 31st" };
console.log("Q9: ", newNewCombinedData);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const Accomps = [...newNewCombinedData.accomplishments];
console.log("Q10: ", Accomps);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const { food } = user.favoriteThings;
console.log("Q11: ", food);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [food1, food2] = food;
console.log("Q12: ", [food1, food2]);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [firstName, age, ...foodArr] = data;
console.log("Q13: ", "Name:", firstName, " Age:", age, " Foods:", foodArr);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondFavoriteThing],
    },
  },
} = userInfo;

console.log(
  "Q14: ",
  "userName:",
  userName,
  " favoriteFood:",
  favoriteFood,
  " favoriteThing:",
  favoriteThing,
  " secondFavoriteThing:",
  secondFavoriteThing
);

//Ignore spaceing for console
console.log("");
console.log("---------------------------------------------------------");
console.log("");

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then(
  (res) => {
    console.log("Q15: ", res);
  },
  (rej) => {
    console.log("Q15: ", rej.message);
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const newAsyncFunc = async () => {
  try {
    const res = await fetchData();
    console.log("Q16: ", res);
  } catch (error) {
    console.log("Q16: ", error.message);
  }
};
newAsyncFunc();

//Ignore spaceing for console
console.log("");
