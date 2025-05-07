function showMessage() {
    var message = "Hello from inside the function!";
    alert(message);
}

document.getElementById("myButton").addEventListener("click", showMessage);