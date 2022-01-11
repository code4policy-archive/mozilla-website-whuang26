const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

// Add a button called "Cick Me!" to homepage
 document.addEventListener("DOMContentLoaded", function() {
     var element = document.createElement("button");
     element.appendChild(document.createTextNode("Click Me!"));
     var page = document.getElementById("btn");
     page.appendChild(element);
     console.log(element);
 });

 // Corrected "meta charset="UTF-8"".