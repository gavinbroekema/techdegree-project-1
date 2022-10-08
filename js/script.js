/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "Do. Or do not.There is no try.",
    source: "- Yoda",
    citation:
      "Twentieth Century Fox",
    year: "1977",
    tags: "Science-Fiction"
  },
  {
    quote: "You cannot plan the future by the past.",
    source: "- Edmund Burke"
  },
  {
    quote: "The shortest answer is doing.",
    source: "- English Proverb"
  },
  {
    quote:
      "My doctor gave me six months to live, but when I couldn't pay the bill, he gave me six months more.",
    source: "- Walter Mattbau"
  },
  {
    quote:
      "Every stage of life has its troubles, and no man is content with his own age.",
    source: "- Ausonius"
  }
];
let colors = ["#041a7f", "#e05963", "#19d062", "#a04193", "#2ca67b"];

// Create root variable for easy access later on
let root = document.getElementById("quote-box");

/***
 * `getRandomQuote` function
***/

// Get a random quote and return the random quote object
function getRandomQuote() {
  let rand = Math.floor(Math.random() * (quotes.length - 1)); // change to fit bg too
  return quotes[rand];
}

// Select a random background and change the background of the body element
function changeBackground() {
  let num = Math.floor(Math.random() * (colors.length - 1));
  console.log(num);
  document.body.style.backgroundColor = colors[num];
}

/***
 * `printQuote` function
***/

// When called, changes the background color
// Then puts together an innerHTML consisting of h1, p1, and possibly 3 i elements
// The final innerHTML is sent to the root div element
function printQuote() {
  // Changes the background color
  changeBackground();

  // Get a random quote object from the getRandomQuote function
  let quoteObj = getRandomQuote();
  // Sanity check, make sure the quote object is being retrieved
  console.log(quoteObj);
  // Create a div that
  root.innerHTML = "<p class='quote'>" + quoteObj.quote + "</p>";
  root.innerHTML += "<p class='source'>" + quoteObj.source;
  

  // Check and see if the quoteObj has a citation if so, print it as well
  if (quoteObj.citation != null) {
    root.innerHTML += "<span class='citation'>" + quoteObj.citation + " </span>";
  }
  // Check and see if the quoteObj has a year if so, print it as well
  if (quoteObj.year != null) {
    root.innerHTML += "<span class='year'>" + quoteObj.year + " </span>";
  }
  // Check and see if the quoteObj has a tags if so, print it as well
  if (quoteObj.tags != null) {
    root.innerHTML += "<i>" + quoteObj.tags + "</i>";
  }
}

root.innerHTML += "+ </p></div>"



// Call the printQuote function every 5 seconds
// Will change bg color and quote regardless of button press
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);