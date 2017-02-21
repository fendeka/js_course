var sorter_heap = {
    array_length: '',

    root:function (input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < this.array_length && input[left] > input[max]) {
            max = left;
        }

        if (right < this.array_length && input[right] > input[max])     {
            max = right;
        }

        if (max != i) {
            this.swap(input, i, max);
            this.root(input, max);
        }
    },

    swap: function (input, index_A, index_B) {
            var temp = input[index_A];

            input[index_A] = input[index_B];
            input[index_B] = temp;
    },

    sort: function (input) {

            this.array_length = input.length;

            for (var i = Math.floor(this.array_length / 2); i >= 0; i -= 1){
                this.root(input, i);
            }

            for (i = input.length - 1; i > 0; i--) {
                this.swap(input, 0, i);
                this.array_length--;


                this.root(input, 0);
            }
        },
}
var sorter_bubble = {
    sort: function (input) {
        var swap;
        do {
            swap = false;
            for (var i=0; i < input.length-1; i++) {
                if (input[i] > input[i+1]) {
                    var temp = input[i];
                    input[i] = input[i+1];
                    input[i+1] = temp;
                    swap = true;
                }
            }
        } while (swap);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
console.log(arr);

sorter_heap.sort(arr);
console.log(arr);
var ar = [3, 0, 2, 5, -1, 4, 1];
console.log(ar);
sorter_bubble.sort(ar)
console.log(ar);