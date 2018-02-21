import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import MemeItem from './MemeItem';
import MyMemes from './MyMemes';


class App extends Component {

  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    };
  }

  render() {
    return (<div className="container">

      <h1><u>Welcome TO The Memes Genrator!</u></h1>
      <p><i>Write Some Text</i></p>

      <MyMemes />

      <hr />

      <Form inline>
        <FormGroup>
          <ControlLabel>Top:</ControlLabel>
          {" "}
          <FormControl type="text" onChange={ event => this.setState({ text0: event.target.value }) } />
        </FormGroup>
          {" "}
        <FormGroup>
          <ControlLabel>Bottom:</ControlLabel>
          {" "}
          <FormControl type="text" onChange={ event => this.setState({ text1: event.target.value }) } />
        </FormGroup>
      </Form>

      {
        this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (<MemeItem 
            key={index}
            meme={meme}
            text0={ this.state.text0 }
            text1={ this.state.text1 }
            />);
        })
      }

      {
        this.props.memes.error ?
          <div style={{ width: '300px', margin: 'auto' }} className="alert alert-danger"> Error With Getting New Memes </div> :
          <div></div>
      }
      <br />
      {
        this.state.memeLimit <= this.props.memes.length ?
          <button className='btn btn-default' onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })}>Load more 10 ..</button>
          :
          <div style={{ width: '300px', margin: 'auto' }} className="alert alert-success"> Finished </div>
      }

    </div >);
  }

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);