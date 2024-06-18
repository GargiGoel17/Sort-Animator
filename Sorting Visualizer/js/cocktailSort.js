// js/cocktailSort.js

// Cocktail Shaker Sort with visualization
async function cocktailSort(arr) {
    let start = 0;
    let end = arr.length;

    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = start; i < end - 1; ++i) {
            if (arr[i] > arr[i + 1]) {
                await swapBars(arr, i, i + 1);
                swapped = true;
            }
        }

        if (!swapped) break;

        swapped = false;
        end--;

        for (let i = end - 1; i >= start; --i) {
            if (arr[i] > arr[i + 1]) {
                await swapBars(arr, i, i + 1);
                swapped = true;
            }
        }

        start++;
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

// Start the cocktail sort
cocktailSort(numbers);
