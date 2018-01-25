import React, { Component } from 'react';
import Post from '../Post/Post';
import ThreadDisplay from '../ThreadDisplay/ThreadDisplay';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import './Message.css';
import firebase from 'firebase';
import Wrapper3 from '../Wrapper3/Wrapper3';
import './Message';
//import {db} from '../../firebase';

// import './App.css';


class Message extends Component {
   constructor(props) {
    super(props);
this.addPost = this.addPost.bind(this);
this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

    this.state = {
      posts: [],
      newPostBody: '',

    }
  }

addPost(){
 
  const newState = Object.assign({}, this.state);
  newState.posts.push(this.state.newPostBody);
  newState.newPostBody = '';
  this.setState(newState);
}

handlePostEditorInputChange(ev) {
  this.setState({
    newPostBody: ev.target.value
  })
}
 
render() {
  return(
    <Wrapper3>
    <div>
      <Navbar />
          <div className="messageBox"> 
     
            <div>
              <h1> In Box </h1>
              <br />
              <br />
              <br />
            </div>
         <ThreadDisplay posts={this.state.posts} />
   
<div className="panel panel-default post-editor">
  <div className="panel-body">
    <textarea className="form-control post-editor-input" value= {this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
      <br />
    <button className="btn btn-success post-editor-button" onClick= {this.addPost}> Post </button>
  </div>
</div>
  <Footer />
      </div>
  </div>
</Wrapper3>
);

}
}

export default Message