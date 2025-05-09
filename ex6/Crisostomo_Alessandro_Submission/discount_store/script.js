// Get the base price as a global variable
base_price = Number(document.getElementById("price").textContent);
DISCOUNT_PERCENTAGE = 20;
// discountPercentage is an integer which represents the percentage.
function createDiscount(discountPercentage) {

    function inner() {
        document.getElementById("discountedPrice").textContent = base_price * (1-(discountPercentage*0.01));
    }
    
    return inner;
}

document.getElementById("applyDiscount").addEventListener("click", createDiscount(DISCOUNT_PERCENTAGE));

