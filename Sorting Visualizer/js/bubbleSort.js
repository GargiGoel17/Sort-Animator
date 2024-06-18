// js/bubbleSort.js

// Bubble sort with visualization
async function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                await swapBars(arr, j, j + 1);
            }
        }
    }
}

// Function to swap two bars
function swapBars(arr, i, j) {
    return new Promise(resolve => {
        setTimeout(() => {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            drawBars(arr);
            resolve();
        }, 50); // Using a delay of 50 milliseconds
    });
}

// Start the bubble sort
bubbleSort(numbers);
