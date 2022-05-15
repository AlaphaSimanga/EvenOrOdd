// program to check if the number is even or odd, if it is not a number display an error message
// get input from the user
const number = prompt("Enter a number: ");

// if the number is even
if(number % 2 == 0) {
    console.log("The number is EVEN.");
}

// if the number is odd
else if(!isNaN(number)){
    console.log("The number is ODD.");
}   
    
//if it is not a number
else  {
    //document.getElementById("error").style.display = "block";
    alert("THIS IS NOT A NUMBER!!!");
}


