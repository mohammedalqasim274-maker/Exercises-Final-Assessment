// Get elements
const costInput = document.getElementById("cost");
const litersInput = document.getElementById("liters");
const resultText = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");

// Calculate total cost when button is clicked
calculateBtn.addEventListener("click", () => {

    // Convert input values to numbers
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    // Calculate total
    const total = cost * liters;

    // Display result with 2 decimal places
    resultText.textContent = `Total cost: £${total.toFixed(2)}`;
});
