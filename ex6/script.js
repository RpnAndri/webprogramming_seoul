function showMessage() {
    var message = "Hello from inside the function!";
    alert(message);
}

document.getElementById("myButton").addEventListener("click", showMessage);

function myOuterFunction() {
    let secret = "I am a secret message!";

    function myInnerFunction() {
        console.log(secret);
    }
    return myInnerFunction;
}

const myClosure = myOuterFunction();
myClosure();