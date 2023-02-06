// Question 1:

// This list represents the Calories of the food carried by five Elves:
// The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
// The second Elf is carrying one food item with 4000 Calories.
// The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
// The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
// The fifth Elf is carrying one food item with 10000 Calories.
// In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000 (carried by the fourth Elf).
// Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?
  
// first try:
const calories =[[1000,2000,3000], [4000], [5000, 6000], [7000,8000,9000], [10000]]
// const test = {
//   0: [ 1, 2, 3 ],
//   1: [ 4 ],
//   2: [ 5, 6 ],
//   3: [ 7, 8, 9 ],
//   4: [ 10 ]
// }

function mostCaloriesElf(array){
  //create variable to return
  let mostCalories = 0;
  //loop through array
  for(let i=0; i<array.length; i++){
    //grab inner arrays in variable
    const innerArray = (array[i]);
    //sum inner arrays
    const innerArraySum = innerArray.reduce((a,b)=>a+b,0);
    //if inner arrays sum is greater than mostCalories, update mostCalories
    if(innerArraySum > mostCalories){
      mostCalories = innerArraySum;
    }
  }
  //return mostCalories
  return mostCalories;
}
console.log(mostCaloriesElf(calories));

// second try:
function mostCaloriesElf2(array){
  //set mostCalories to 0
  let mostCalories = 0;
  //make object to return
  let elfCaloriePair = {};
  //change array to object with index-element as key-value pairs
  const newObject = Object.assign({}, calories)
  //loop through making a key-value pair of each pair in object
  for(const [key, value] of Object.entries(newObject)){
    //grab sum of the values
    const valueArraySum = value.reduce((a,b)=>a+b,0);
    //if the values sum is greater than mostCalories, update mostCalories, update elfCaloriePair
    if(valueArraySum > mostCalories){
      mostCalories = valueArraySum;
      elfCaloriePair[key] = value
      
    }
  }
  //return most calories
  // return mostCalories;
  //return elfCaloriePair
  return elfCaloriePair;
}
// console.log(mostCaloriesElf2(calories));



//practice manipulating arrays/objects:

// sums the elements in that array
// let sum = calories[3].reduce((a,b) => a+b, 0)
// console.log(sum)

//changes array to object with index-element as key-value pairs
// console.log(Object.assign({}, calories))
