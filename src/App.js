//import logo from './logo.svg';
import './App.css';
import React from 'react'

let quoteArr = [
  {
    text: "The universe is a big place, perhaps the biggest.",
    author: "Kurt Vonnegut"
  },
  { 
    text: "I feel the same way about disco as I do about herpes.", 
    author: "Hunter S. Thompson"
  },
  {
    text: "I don't believe in astrology; I'm a Sagittarius and we're skeptical.",
    author: "Arthur Clarke"
  },
  {
    text: "All the waste in a year from a nuclear power plant can be stored under a desk.",
    author: "Ronald Reagan"
  },
  {
    text: "People all over the world recognize me as a spiritual leader.",
    author: "Steven Seagal"
  }
]

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    const randomInit = Math.floor(Math.random() * 5);
    this.state = {
      quote: quoteArr[randomInit].text,
      author: quoteArr[randomInit].author,
      lastNum: randomInit
    }
    this.displayQuote = this.displayQuote.bind(this);
  }

  displayQuote = () => {
    for (let i = 0; i < 1;) {
      const random = Math.floor(Math.random() * 5);
        if (random !== this.state.lastNum) {
          this.setState({
            quote: quoteArr[random].text,
            author: quoteArr[random].author,
            lastNum: random
          });
        i = 2
      }
    }
  }

  render() {
    return (
      <div id="quote-box" >
        Random Quote Generator
        <div id="box">
          <p id="text">"{this.state.quote}"</p>
          <p id="author">-{this.state.author}</p>
        </div>
        <button id="new-quote" onClick={this.displayQuote}>New Quote</button>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet">
          <img src="https://cdn.icon-icons.com/icons2/1129/PNG/512/twitterlogoincircularblackbutton_79784.png"
              width="50px" height="50px"/>
        </a>
      </div>
    );
  }
}

export default QuoteBox;
