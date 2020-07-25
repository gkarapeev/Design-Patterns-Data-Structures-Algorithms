var unsortedArray = [89, 4, 3, 67, 1, 6, 71, 19.6, 1000, 91, 2, 28, 10, 5, 19.7, 7, 35, 49, 0, 55];
function bubbleSort(array) {
    for (var i = array.length - 1; i > 0; i--) {
        for (var j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                var smaller = array[j + 1];
                array[j + 1] = array[j];
                array[j] = smaller;
            }
        }
    }
}
bubbleSort(unsortedArray);
console.log(unsortedArray);
