console.log("boom")

var operation = prompt("Welcome to the online calculator. Do you want to add, subtract, divide, multiply, sqrt or get the power of a number type P");
var num1 = parseFloat(prompt("Enter your first number"));
  if (operation !== "sqrt"){
  var num2 = parseFloat(prompt("Enter your second number"));
}

    switch (true){
      case operation === "add":
      alert(num1 + num2);
      break;
      case operation === "subtract":
      alert(num1 - num2);
      break;
      case operation === "divide":
      alert(num1 / num2);
      break;
      case operation === "multiply":
      alert(num1 * num2)
      break;
      case operation === "sqrt":
      alert(Math.sqrt(num1));
      break;
      case operation === "P":
      alert(Math.pow(num1,num2));
      break;
      default:
      alert("error");
    }
