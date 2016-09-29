console.log ("checking");

document.getElementById("calculator").addEventListener("submit", calculator);
  console.log("clicked");

function calculator(event){
  event.preventDefault(event);
  var input1 = document.getElementById("input1").value;
  var operation = document.getElementById("operations").value;
  var input2 =document.getElementById("input2").value;
  console.log(input1);

  switch(operation){
      case "add":
      var result = ((parseFloat(input1)) + parseFloat(input2));
      console.log(result);
      break;
      case "subtract":
      var result = ((parseFloat(input1)) - parseFloat(input2));
      console.log(result);
      break;
      case "multiply":
      var result = ((parseFloat(input1)) * parseFloat(input2));
      console.log(result);
      break;
      case "divide":
      var result = ((parseFloat(input1)) / parseFloat(input2));
      console.log(result);
      break;
      default:
    }
    document.getElementById("result").innerHTML = result ;
    }
