//
//
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiple(a, b) {
    return a * b;
}
function divide(a, b) {
    if (a === 0) {
        return 0;
    }
    if (b === 0) {
        return undefined;
    }
    else {
        return a / b;
    }
}
var Tri = {
    numEdges: 3,
    numAngles: 3,
};
var Rec = {
    numEdges: 4,
    numAngles: 4,
};
function len(arr) {
    return arr.length;
}
function average(arr) {
    try {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        result = result / arr.length;
        return result;
    }
    catch (e) { }
}
function clamp(value, min, max) {
    if (value <= min) {
        return min;
    }
    else if (value >= max) {
        return max;
    }
    else {
        return value;
    }
}
function rangeGenerator(start, end, step) {
    if (!step) {
        step = 1;
    }
    if (start > end) {
        var temp = start;
        start = end;
        end = temp;
    }
    var result = [];
    var tracker = start;
    while (tracker <= end) {
        result.push(tracker);
        tracker += step;
    }
    return result;
}
var emptyArr = [];
var numArr = [1, 2, 3, 4, 5];
var strArr = ["hello", "world"];
var shapeArr = [Tri, Rec];
console.log(average(numArr));
console.log(average(emptyArr));
console.log(clamp(3.4, 4.32, 9.32));
console.log(rangeGenerator(2.1, 19.5, 2.5));
