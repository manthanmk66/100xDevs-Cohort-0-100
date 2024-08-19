/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 
 */



function busyWait(milliseconds) {
    const end = Date.now() + milliseconds;
    while (Date.now() < end) {
        // Busy wait
    }
    return Promise.resolve();
}

// Example usage
busyWait(5000).then(() => console.log("Busy wait completed after 5 seconds"));





// function sleep(milliseconds) {
//     return new Promise(resolve => {
//       setTimeout(resolve, milliseconds);
//     });
//   }