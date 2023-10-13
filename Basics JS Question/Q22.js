// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sorted = ages.sort();
console.log(sorted);
// Sort the array and find the min and max age
console.log(Math.min(...sorted));
console.log(Math.max(...sorted));
// Find the median age(one middle item or two middle items divided by two)
let index = sorted.length/2;
console.log((sorted[index]+(sorted[index-1]))/2);
// Find the average age(all items divided by number of items)
function add(accumulator, a) {
    return accumulator + a;
  }
let sumation = sorted.reduce(add,0);
let avarage = sumation/sorted.length;
console.log(avarage);
// Find the range of the ages(max minus min)
let range = Math.max(...sorted) - Math.min(...sorted);
console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method
let minMinusAvarage = Math.min(...sorted) - avarage;
let maxMinusAvarage = Math.max(...sorted) - avarage;
console.log(Math.abs(maxMinusAvarage));
console.log(Math.abs(minMinusAvarage));
