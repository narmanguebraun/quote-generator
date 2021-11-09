const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Loading: show Loading Spinner
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
// Complete: remove Loading Spinner
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

function newQuote() {
  loading();
  try {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    if (!quote.author) {
      authorText.textContent = 'Unknown';
    } else {
    authorText.textContent = quote.author;
    }
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
  } catch (error) {
        newQuote();
    }
}

// Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} — ${author}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

newQuote();
