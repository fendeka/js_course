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
    return digits.join('');
};

var out = nextBigger(53);

console.log(out);

var MyObject = {

    property: function (name, value) {
        Object.defineProperty(this, name,  {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        })
    },

    constant: function (name, value) {
        Object.defineProperty(this, name,  {
            enumerable: true,
            configurable: false,
            writable: false,
            value: value
        })
    },

    hidden: function (name, value) {
        Object.defineProperty(this, name,  {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        })
    },

    values: function () {
        return Object.values(this);
    }

};

MyObject.property('test1', 123);
MyObject.hidden('test2', 123);
MyObject.constant('test3', 123);

console.log(MyObject);
console.log(MyObject.values());

