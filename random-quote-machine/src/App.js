import React from 'react';
import axios from 'axios';
import { BeforeData } from './BeforeData';
import { HtmlInterface } from './HtmlInterface';

// values for axios to get data from API
const URL = 'https://api.paperquotes.com/quotes/?tags= smiling,happiness,life,smile&language=en&limit=500';
const TOKEN = '1f4a67eec9e663b663ea72963d0abdaf71876348';
const TWEETURL = 'https://twitter.com/intent/tweet';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: '',
      author: '',
      dataReady: false,
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  // get data from API
  componentDidMount() {
    axios.get(URL, {
      headers: {
        'Authorization': `Token ${TOKEN}`
      }
    })
      .then(res => {
        this.setQuotesInState(res.data.results);
      })
      .catch(error => {
        console.error(error)
      });
  }

  setQuotesInState(quotes) {
    this.setState({
      quotes: quotes
    }, () => {
      this.getNewQuote();
    });
  }

  // get next quote with random id and set it to state
  getNewQuote() {
    const id = this.getRandomId();
    const quote = this.removeAuthorFromQuote(this.state.quotes[id].quote);
    const author = this.state.quotes[id].author
    this.setState({
      quote: quote,
      author: author,
      dataReady: true
    });
  }

  // generate random id for next quote
  getRandomId() {
    return Math.floor(Math.random() * 500 + 1);
  }

  // in this API sometimes in quote string appears author after dot. This is to remove it.
  removeAuthorFromQuote(quote) {
    return quote.split('.')[0] + '.';
  }

  // this makes it a bit shorter
  getTweeterLink() {
    return TWEETURL + `?via=umykanin&text="${this.state.quote}"%0a${this.state.author}%0a&hashtags=famousQuotes`;
  }

  render() {
    if (this.state.dataReady) {
      return (
        <HtmlInterface
          quote={<p>"{this.state.quote}"</p>}
          author={this.state.author}
          getNewQuote={this.getNewQuote}
          twitterIntentLink={this.getTweeterLink()}
          target={"_blank"} />
      );
    } else return (
      <BeforeData />
    );
  }
}

export default App;
