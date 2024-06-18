// js/insertionSort.js

// Insertion sort with visualization
async function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            drawBars(arr);
            await new Promise(resolve => setTimeout(resolve, 50));
            j = j - 1;
        }
        arr[j + 1] = key;
        drawBars(arr);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

// Start the insertion sort
insertionSort(numbers);
