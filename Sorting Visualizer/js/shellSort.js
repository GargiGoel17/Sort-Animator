// js/shellSort.js

// Shell sort with visualization
async function shellSort(arr) {
    let n = arr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
            drawBars(arr);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        gap = Math.floor(gap / 2);
    }
}

// Start the shell sort
shellSort(numbers);
