// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { array, describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
//Pseudocode**
//input is an Array. I'm going to create a function which takes in an array and takes away the first item, from the array. For this I could use . shift method.  Set up a loop so that after 1st item is removed remaining items are shuffled Output is then reshuffled the order of the remaining items in the array are mixed up from the original order. I can use splice to do this. 
 describe("arrayShuffle", () => {
    expected = []
     it("matches even if received contains additional elements", () => {
         expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.arrayContaining(expected))
        expect (["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.arrayContaining(expected))
        expect(["yellow", "blue", "pink", "green"]).toEqual(expect.arrayContaining(expected))
        expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(expect.arrayContaining(expected))
    })
     })
    //Test Suites: 1 failed, 1 total  ReferenceError: expected is not defined
     //Test Suites: 1 passed, 1 total 
    //  let colorArray = [] 
    //  const expected = (array) => {
    //      return [].shift()
    //  }
    //      let removedFirst = () => {
    //         return expected.sort()
         
    //      }
    //      colorArray(removedFirst) 
         
     
        
           
         
     
     //worked on this close to 5 plus hours could not figure out how to both sort and shift within a nested function, Is this possible ?


   
    


// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
 
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
//pseudocode
//first step would be to input an array containing numbers then take those numbers and figure out which one is the largest number and sort from largest to smallest in the array. Output would be the smallest number first followed by the largest number contained in the array. I can use a method called slice to do this. 
describe("minMax", () => {
    it("takes an array and returns an array of the minimum and maximum numbers in that order", () => {
        expect([3, 56, 90, -8, 0, 23, 6]).toEqual([-8, 90])
        expect([109, 5, 9, 67, 8, 24]).toEqual([5, 109])
        // this test isn't working it says no argument.
    })
})
const numArray = []
numArray.slice().sort (function smallLarge(a,b) {
    return b - a
})
//const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
//const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudocode input is 2 different array containing some of the same numbers. I need to take that array and create an function that outputs the array with no duplicate values. I can use .filter to do this.
// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
describe("no_Dupes", () => {
    it(" takes in 2 different arrays and outputs a single array with no duplicate values",() =>{
        expect ([testArray1],[testArray2]).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
}
)
// ● Test suite failed to run

//     Your test suite must contain at least one test.
// b) Create the function that makes the test pass.
//Test Suites: 1 failed, 1 total
const no_Dupes = ([array1,array2]) => {
return [ ...array1,...array2]
}

no_Dupes(testArray1)
no_Dupes(testArray2)

//TypeError: array1 is not iterable