let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
 
    // Rest of the code...
    if (quote.author.includes('type.fit')) {
        const reviseText = (quote.author).slice(0, -10);
        authorText.textContent = reviseText;
    } else {
        authorText.textContent = quote.author;
    }

    //Check Quote Length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
     if (authorText.textContent === '') {
        authorText.textContent = "Unknown";
    } 
}

// Get Quotes from API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
        alert(error)
    }
}

// On Load
getQuotes()

