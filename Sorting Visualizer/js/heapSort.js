// js/heapSort.js

// Heap sort with visualization
async function heapSort(arr) {
    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        await swapBars(arr, 0, i);
        await heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is an index in arr[]. n is size of heap
async function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        await swapBars(arr, i, largest);
        await heapify(arr, n, largest);
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

// Start the heap sort
heapSort(numbers);
