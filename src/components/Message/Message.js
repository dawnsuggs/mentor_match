import React, { Component } from 'react';
import Post from '../Post/Post';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import './Message.css';
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

    <div> 
      <Navbar />
      <div>
        <h1> In Box </h1>
      </div>
         {
        this.state.posts.map((postBody, id) => {
              return(
              <Post key={id} postBody={postBody} /> 
              )  
})
        
        
   }    
  
<div className="panel panel-default post-editor">
    <div className="panel-body">
      <textarea className="form-control post-editor-input" value= {this.state.newPostBody} onChange={this.handlePostEditorInputChange}/>
      <button className="btn btn-success post-editor-button" onClick= {this.addPost}> Post </button>
    </div>
</div>
<Footer />
</div>
);

}
}

export default Message