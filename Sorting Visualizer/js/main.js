// js/main.js

// Get references to the DOM elements
const canvas = document.getElementById('sortingCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const algorithmSelect = document.getElementById('algorithm');

// Constants
const NUMBERS_COUNT = 100;
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
const BAR_WIDTH = CANVAS_WIDTH / NUMBERS_COUNT;

// Set canvas dimensions
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Initialize the array with random values
let numbers = Array.from({ length: NUMBERS_COUNT }, () => Math.floor(Math.random() * CANVAS_HEIGHT));

// Function to draw the bars
function drawBars(arr) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    for (let i = 0; i < arr.length; i++) {
        ctx.fillStyle = 'white';
        ctx.fillRect(i * BAR_WIDTH, CANVAS_HEIGHT - arr[i], BAR_WIDTH, arr[i]);
    }
}

// Initial draw
drawBars(numbers);

// Event listener for the start button
startButton.addEventListener('click', () => {
    const selectedAlgorithm = algorithmSelect.value;

    // Reset the array and draw the initial bars
    numbers = Array.from({ length: NUMBERS_COUNT }, () => Math.floor(Math.random() * CANVAS_HEIGHT));
    drawBars(numbers);

    // Dynamically load the appropriate sorting script
    if (selectedAlgorithm === 'bubble') {
        loadScript('js/bubbleSort.js');
    } else if (selectedAlgorithm === 'merge') {
        loadScript('js/mergeSort.js');
    } else if (selectedAlgorithm === 'insertion') {
        loadScript('js/insertionSort.js');
    } else if (selectedAlgorithm === 'quick') {
        loadScript('js/quickSort.js'); // Added Quick Sort option
    } else if (selectedAlgorithm === 'selection') {
        loadScript('js/selectionSort.js'); // Added Selection Sort option
    } else if (selectedAlgorithm === 'heap') {
        loadScript('js/heapSort.js'); // Added Heap Sort option
    } else if (selectedAlgorithm === 'radix') {
        loadScript('js/radixSort.js'); // Added Radix Sort option
    } else if (selectedAlgorithm === 'shell') {
        loadScript('js/shellSort.js'); // Added Shell Sort option
    } else if (selectedAlgorithm === 'cocktail') {
        loadScript('js/cocktailSort.js'); // Added Cocktail Sort option
    }

});

// Function to load a script dynamically
function loadScript(scriptSrc) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    document.body.appendChild(script);
}