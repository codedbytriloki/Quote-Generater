const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing .",
    author: "Wait Disney"
  },
  {
    quote:"Don't let yesterday take up too much of today .",
    author:"Will Rogers"
  },
  {
    quote: "It's not whether you get knocked down, It's whether you get up .",
    author: "Vince Lombardi"
  },
  {
    quote: "If you are working on something exciting , it will keep you motivated .",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not in what you have, but who you are .",
    author: "Bo Bennett"
  }
]

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', () => {
   let randomQuote = Math.floor(Math.random() * quotes.length);
   let quoteIdx = quotes[randomQuote];
   quoteEl.innerHTML= `<span>" </span> ${quoteIdx.quote} <span>" </span>`;
   authorEl.innerHTML = `" ${quoteIdx.author} "`;
})

document.getElementById('copy-btn').addEventListener('click', () => {
  navigator.clipboard.writeText(`${quoteEl.innerText} ${authorEl.innerText}`);
  alert("Quote copied!");
})

const tweetEl = document.querySelector('.tweet');
tweetEl.onclick = () => {
  const tweetText = `${quoteEl.innerText} ${authorEl.innerText}`;

  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`);
}