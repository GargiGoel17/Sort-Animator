// js/quickSort.js

// Quick sort with visualization
async function quickSort(arr, low, high) {
    if (low < high) {
        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}

// Partition function
async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            await swapBars(arr, i, j);
        }
    }
    await swapBars(arr, i + 1, high);
    return (i + 1);
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

// Start the quick sort
quickSort(numbers, 0, numbers.length - 1);
