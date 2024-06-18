// js/selectionSort.js

// Selection sort with visualization
async function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            await swapBars(arr, i, minIndex);
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

// Start the selection sort
selectionSort(numbers);
