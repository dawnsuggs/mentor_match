import React, { Component} from 'react';
import Post from '../Post/Post';
import PostEditor from '../PostEditor/PostEditor';

class ThreadDisplay extends Component {
constructor(props) {
    super(props);

    this.state = {
      posts: [],
      }


this.addPost = this.addPost.bind(this);

    
  }

addPost(newPostBody){
 
  const newState = Object.assign({}, this.state);
  newState.posts.push(newPostBody);
  this.setState(newState);
}

render (){
	return(
	  <div className = "panel panel-default">
         
      {this.props.posts.map(function(post) {
        return (<div>{post}</div>)
      })}           
    
 
</div>

);
}
}
export default ThreadDisplay;