import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {

  render() {
    return(<div>


      {
        !!this.props.myMemes.length ?
          <h4><i>This Is My Memes</i></h4> :
          <h4> </h4>
      }

      {
        this.props.myMemes.map( (meme, index) => {

          return(<div className="my-meme" key={index} >
            <img className="my-meme-img" src={meme.url} alt={meme.page_url} />
          </div>);

        })
      }

    </div>);
  }
}

const mapStateToProps = state => ({ myMemes: state.myMemes });

export default connect(mapStateToProps,null)(MyMemes);