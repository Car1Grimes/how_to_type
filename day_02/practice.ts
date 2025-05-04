//
//
function mapItems<T>(arr: T[], callback: (item: T) => T): T[] {
  let result: T[] = arr;
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i]);
  }
  return result;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function average(nums: number[]): number[] {
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  return [sum / len];
}

function filterItems<T>(arr: T[], callback: (item: T) => boolean): T[] {
  let result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function deleteNegatives(num: number): boolean {
  return num >= 0;
}

const str_01 = "hi, i am nobody";
const cap_arr: string[] = mapItems(str_01.split(" "), capitalize);
let capitalizedString: string = "";

for (let i = 0; i < cap_arr.length; i++) {
  capitalizedString += `${cap_arr[i]} `;
}
console.log(capitalizedString);

const nums: number[][] = [
  [1, 2, 3],
  [11, 23, 2],
  [4, 32, 2],
];
let avgs: number[][] = mapItems(nums, average);
console.log(avgs);

const nums_01 = [2, -3, 4, -6, 12, 34, -2, 100];
console.log(filterItems(nums_01, deleteNegatives));
