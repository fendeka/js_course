var nextBigger = function (number) {
    var digits = number.toString().split('');
    var temp = 0;
    for(var i = digits.length; i > 0; i--){
        if(digits[i] > digits[i-1]){
            temp = digits[i];
            digits[i] = digits[i-1];
            digits[i-1] = temp;
            return digits.join('');
        }
    }
    return digits;
};

var out = nextBigger(513);

console.log(out);