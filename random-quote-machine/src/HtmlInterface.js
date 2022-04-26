import React from "react";
import twitterPic from './img/twt.png';
import './HtmlInterface.css';

class HtmlInterface extends React.Component {
    render() {
        return(
<div className="App" >
                <div id="quote-box">
                    <div id="text">{this.props.quote}</div>
                    <div id="author">{this.props.author}</div>
                    <div id="buttons-container">
                        <div id="new-quote" onClick={this.props.getNewQuote}>New quote</div>
                        <div>
                            <a id="tweet-quote" href={this.props.twitterIntentLink} target={this.props.target}>
                                <img id="twitter-img" alt="" src={twitterPic}></img>
                                Tweet quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export { HtmlInterface };