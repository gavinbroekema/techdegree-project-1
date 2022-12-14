/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    citation:
      "Twentieth Century Fox",
    year: "1977",
    tags: "Science-Fiction"
  },
  {
    quote: "You cannot plan the future by the past.",
    source: "Edmund Burke",
    citation: "British State",
    year: "1782",
    tags: "Historical"
  },
  {
    quote: "The shortest answer is doing.",
    source: "English Proverb"
  },
  {
    quote:
      "My doctor gave me six months to live, but when I couldn't pay the bill, he gave me six months more.",
    source: "Walter Mattbau"
  },
  {
    quote:
      "Every stage of life has its troubles, and no man is content with his own age.",
    source: "Ausonius"
  }
];
let colors = ["#041a7f", "#e05963", "#19d062", "#a04193", "#2ca67b"];

// Create root variable for easy access later on
let root = document.getElementById("quote-box");

/***
 * `getRandomQuote` function
 * @returns {array} quote - returns object from quotes variable 
***/

let lastIndex = 0;
// Get a random quote and return the random quote object
function getRandomQuote() {
  // Check the current quote
  let rand = Math.floor(Math.random() * (quotes.length - 1)); // change to fit bg too
  // Check if the current quote is equal to the random quote selected
  while(rand === lastIndex) {
    rand = Math.floor(Math.random() * (quotes.length - 1));
  }
  lastIndex = rand;
  return quotes[rand];
}

/***
 * `changeBackground` function
 *  Changes the background color of the body element
***/

function changeBackground() {
  let num = Math.floor(Math.random() * (colors.length - 1));
  console.log(num);
  document.body.style.backgroundColor = colors[num];
}

/***
 * `printQuote` function
 *  Builds HTML string to display random quote on browser
***/

function printQuote() {
  changeBackground();

  // Get a random quote object from the getRandomQuote function
  let quoteObj = getRandomQuote();
  // Sanity check, make sure the quote object is being retrieved
  console.log(quoteObj);
  // Create a string that gathers elements to print
  let html = "<p class='quote'>" + quoteObj.quote + "</p>"
  html += "<p class='source'>" + quoteObj.source;
  
  // Check and see if the quoteObj has a citation, year, and tag if so, print it as well
  if (quoteObj.citation != null) {
    html += "<span class='citation'>" + quoteObj.citation + "</span>";
  } 
  if (quoteObj.year != null) {
    html += "<span class='year'>" + quoteObj.year + "</span>";
  } 
  if (quoteObj.tags != null) {
    html += "<span class='tag'>" + quoteObj.tags + "</span>";
  }
  html += "</p>";

  // Final Print
  root.innerHTML = html;
}


// Call the printQuote function every 5 seconds
// Will change bg color and quote regardless of button press
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);