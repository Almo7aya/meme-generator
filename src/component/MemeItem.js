import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component {

  constructor() {
    super();

    this.state = {
      hoverd: false
    }
  }

  postMeme() {
    
    const { text0, text1 } = this.props;
    const memeObj = {
      template_id: this.props.meme.id || '404',
      text0,
      text1
    };

    this.props.createMeme(memeObj);
  }

  render() {
    const { name, url = '/cc.jpg' } = this.props.meme;
    return (<div
      className="meme-item"
      onMouseEnter={() => this.setState({ hoverd: true })}
      onMouseLeave={() => this.setState({ hoverd: false })}
      onClick={() => this.postMeme()}
      >

      <img src={url} alt={name} className= { this.state.hoverd ? "meme-img img-darken" : "meme-img" } />

      <p className={ this.state.hoverd ? "meme-txt" : "no-txt" } >{name}</p>

    </div>);
  }
}

export default connect(null, { createMeme })(MemeItem);