document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    //This code adds an event listener to the "Calculate Tip" button (calculateButton). When the button is clicked, the function specified inside the addEventListener method is executed.
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(
      document.getElementById("tipPercentage").value
    );
    //document.getElementById('billAmount').value: Retrieves the value entered in the input field with the id billAmount. The .value property returns the value as a string.
    //parseFloat(...): Converts the string value to a floating-point number (decimal number). This is done because input values are typically treated as strings by default, and we want to perform mathematical operations on them.

    if (
      !isNaN(billAmount) &&
      !isNaN(tipPercentage) &&
      billAmount > 0 &&
      tipPercentage > 0
    ) {
      // isNaN(...) checks if a value is NaN (Not a Number). If billAmount or tipPercentage is NaN (i.e., not a valid number), the condition !isNaN(billAmount) or !isNaN(tipPercentage) will be false.
      //billAmount > 0 and tipPercentage > 0 ensure that both values are positive numbers.
      //If any of these conditions are not met (i.e., user did not enter valid numbers or entered negative numbers), an alert (the else condition) is shown prompting the user to enter valid numbers.
      const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
      const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

      //tipAmount is calculated by multiplying billAmount by tipPercentage / 100. This converts the tip percentage to a decimal value (e.g., 15% becomes 0.15).
      //toFixed(2) method is used to round the result to two decimal places, ensuring proper currency formatting.

      document.getElementById("tipAmount").textContent = tipAmount;
      document.getElementById("totalAmount").textContent = totalAmount;

      //textContent is used to update the content of HTML elements with the ids tipAmount and totalAmount to display the calculated values.

      document.getElementById("result").classList.remove("hidden");
      //classList.remove('hidden') removes the hidden class from the result element, which makes the result section visible in the UI.
    } else {
      alert("Please enter valid numbers for both fields.");
    }
  });
