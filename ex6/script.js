function createCounter() {
    let count = 0;
    return {
        increment: function() {
                count++;
                // Update the content of the HTML element to display the current count
                document.getElementById("counterDisplay").innerText = "Count: " + count;
            }
        };

}
const counter = createCounter();

    // Get reference to the button and set up the event listener
document.getElementById("incrementButton").addEventListener("click", function() {
    counter.increment();
});


