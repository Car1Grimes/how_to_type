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
