var map = function (call_function, array) {
    arr = [];
    for (var i = 0; i < array.length; i++)
        arr.push(call_function(array[i], i, array));
    return arr;
};

var inputArray = [1, 2, 3, 4, 5];
var outputArray = [1, 3, 5, 7, 9];

deepFreeze(inputArray);

var callback = function (element, index) {
    return element + index;
};

var result = map(callback, inputArray);

expect(result).toEqual(outputArray);

console.log('Test successful!');