const unsortedArray = [89, 4, 3, 67, 1, 6, 71, 19.6, 1000, 91, 2, 28, 10, 5, 19.7, 7, 35, 49, 0, 55];

function insertionSort(input) {
    const len = input.length;

    for (let pointer = 1; pointer < len; pointer++) {
        const currentVal = input[pointer];

        for (let j = pointer - 1; j >= 0; j--) {
            if (currentVal < input[j]) {
                const spliced = input.splice(j + 1, 1)[0];
                input.splice(j, 0, spliced);
            }
        }
    }
    return input;
}

console.log(insertionSort(unsortedArray));