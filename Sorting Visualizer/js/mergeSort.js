// js/mergeSort.js

// Merge sort visualization functions
async function mergeSort(arr, start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        await mergeSort(arr, start, mid);
        await mergeSort(arr, mid + 1, end);
        await merge(arr, start, mid, end);
    }
}

async function merge(arr, start, mid, end) {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
        arr[k++] = left[i] <= right[j] ? left[i++] : right[j++];
        drawBars(arr);
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    while (i < left.length) {
        arr[k++] = left[i++];
        drawBars(arr);
        await new Promise(resolve => setTimeout(resolve, 50));
    }

    while (j < right.length) {
        arr[k++] = right[j++];
        drawBars(arr);
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

// Start the merge sort
mergeSort(numbers, 0, numbers.length - 1);
