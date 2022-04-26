import React from 'react';
import axios from 'axios';
import { BeforeData } from './BeforeData';
import { HtmlInterface } from './HtmlInterface';

// values for axios to get data from API
const url = 'https://api.paperquotes.com/quotes/?tags= smiling,happiness,life,smile&language=en&limit=500';
const token = '1f4a67eec9e663b663ea72963d0abdaf71876348';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quoteId: null,
      dataReady: false,

    };
    this.getRandomId = this.getRandomId.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);

  }
  // get data from API
  componentDidMount() {
    const id = this.getRandomId();
    axios.get(url, {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
      .then(res => {
        this.setState({
          quotes: res.data.results,
          quoteId: id,
          dataReady: true,
        });
      })
      .catch(error => {
        console.error(error)
      });
  }

  // get next quote with random id
  getNewQuote() {
    this.setState(
      { quoteId: this.getRandomId() }
    );
  }

  // generate rando id for next quote
  getRandomId() {
    return Math.floor(Math.random() * 500);
  }

  removeAuthorFromQuote(quote) {
    return quote.split('.')[0] + '.';
  }

  render() {
    if (this.state.dataReady === true) {
      let id = this.state.quoteId;
      const quote = this.state.quotes[id].quote;
      const author = this.state.quotes[id].author;
      // some quotes have author after the text
      const quoteRes = this.removeAuthorFromQuote(quote);
      let displayQuote = <p>"{quoteRes}"</p>;
      let displayAuthor = <p>{author}</p>;
      let twitterIntentLink = `https://twitter.com/intent/tweet?via=umykanin&text="${quoteRes}"%0a${author}%0a&hashtags=famousQuotes`;
      return (
        <HtmlInterface 
          quote={displayQuote}
          autor={displayAuthor}
          getNewQuote={this.getNewQuote}
          twitterIntentLink={twitterIntentLink}
          target={"_blank"}/>
      );
    } else return (
      <BeforeData />
    );
  }
}

export default App;
