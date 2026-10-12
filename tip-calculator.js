var message = "Enter the total restaurant bill amount:";
var bill;

do {
  bill = Number(prompt(message));

  if (bill === 0) {
    message = "Please enter a bill amount greater than zero.";
  } else if (isNaN(bill)) {
    message = "Invalid input. Please enter a numeric bill amount.";
  } else if (bill < 0) {
    message = "Negative amounts are not allowed. Please enter a valid bill amount.";
  }
} while (isNaN(bill) || bill <= 0);

var tip = bill * 0.10;
var result = `For a bill of $${bill.toFixed(2)}, the tip should be $${tip.toFixed(2)}.`;

console.log(result);
document.write("<p>" + result + "</p>");
