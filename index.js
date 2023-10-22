function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i=0; i<array.length;i++){
    let compliment=target -array[i]
    for(j=i+1;j<array.length;j++){
      if(array[j]===compliment){
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/
// O(n2)

/* 
  Add your pseudocode here
*/
// Algorithm: hasTargetSum(array, target)
// Input: An array of integers (array), an integer (target)
// Output: A boolean value indicating whether two distinct elements in the array sum up to the target

// 1. FOR i from 0 to array.length - 1
//   a. Initialize compliment as target - array[i]
//   b. FOR j from i+1 to array.length - 1
//     i. IF array[j] equals compliment
//        THEN
//          RETURN true
//        END IF
//      END FOR
//    END FOR
// 2. RETURN false


/*
  Add written explanation of your solution here
*/
// The function hasTargetSum takes an array of integers and a target sum as its parameters. The function aims to determine whether there are two distinct elements in the array that, when added together, equal the target sum. It employs nested loops to iterate through the array and compare each element against others. If such a pair is found, the function returns true; otherwise, it returns false.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
