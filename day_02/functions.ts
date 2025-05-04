//
//
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiple(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | undefined {
  if (a === 0) {
    return 0;
  }
  if (b === 0) {
    return undefined;
  } else {
    return a / b;
  }
}

type Shape = {
  numEdges: number;
  numAngles: number;
};

const Tri: Shape = {
  numEdges: 3,
  numAngles: 3,
};

const Rec: Shape = {
  numEdges: 4,
  numAngles: 4,
};

function len<Type>(arr: Type[]): number {
  return arr.length;
}

function average(arr: number[]): number | undefined {
  try {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    result = result / arr.length;
    return result;
  } catch (e) {}
}

function clamp(value: number, min: number, max: number): number {
  if (value <= min) {
    return min;
  } else if (value >= max) {
    return max;
  } else {
    return value;
  }
}

function rangeGenerator(start: number, end: number, step?: number): number[] {
  if (!step) {
    step = 1;
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  let result: number[] = [];
  let tracker = start;
  while (tracker <= end) {
    result.push(tracker);
    tracker += step;
  }
  return result;
}

let emptyArr: number[] = [];
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["hello", "world"];
let shapeArr: Shape[] = [Tri, Rec];

console.log(average(numArr));
console.log(average(emptyArr));
console.log(clamp(3.4, 4.32, 9.32));
console.log(rangeGenerator(2.1, 19.5, 2.5));

function capitalize(str: string): string {
  return str.length !== 0 ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

function capitalizeAll(str: string): string {
  if (str.length === 0) {
    return "";
  }
  if (str.length === 1) {
    return capitalize(str);
  }
  const str_splits: string[] = str.split(" ");
  let result: string = "";
  let i = 0;
  const split_len: number = str_splits.length;
  while (i < split_len) {
    result += capitalize(str_splits[i]) + " ";
    i += 1;
  }
  return result;
}

function safeSubstr(str: string, start: number, end?: number): string {
  const len = str.length;
  let safeStart = Math.max(0, Math.min(len - 1, start));
  let safeEnd = end === undefined ? len : Math.min(end, len);
  if (safeStart > safeEnd) {
    return "";
  }
  return str.substring(safeStart, safeEnd);
}

let str_01 = "hello world";
let str_02 = "";
let str_03 = "a";
console.log(capitalize(str_01));
console.log(capitalize(str_02));
console.log(capitalize(str_03));
console.log(capitalizeAll(str_01));
console.log(safeSubstr(str_01, 3));
console.log(safeSubstr(str_01, 5, 2));
console.log(safeSubstr(str_03, 0, 1));
