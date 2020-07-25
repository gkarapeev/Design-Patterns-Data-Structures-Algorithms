var myArray: number[] = [89, 4, 3, 67, 1, 6, 71, 19.6, 91, 2, 28, 10, 5, 19.7, 7, 35, 49, 0, 55];

function sortirai(array: number[]): void {
  for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let smaller = array[j + 1];
        array[j + 1] = array[j];
        array[j] = smaller;
      }
    }
  }
}

sortirai(myArray)
console.log(myArray);