import React, { Components} from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';

class ThreadDisplay extends Components {
constructor(props) {
    super(props);
this.addPost = this.addPost.bind(this);



    this.state = {
      posts: [],
     

    }
  }






addPost(newPostBody){
 
  const newState = Object.assign({}, this.state);
  newState.posts.push(newPostBody);
  this.setState(newState);
}

render (){
	return(
	  <div>
         {
        this.state.posts.map((postBody, id) => {
              return(
              <Post key={id} postBody={postBody} /> 
              )  

})
        
        
   }    
  
<PostEditor addPost={this.addPost} />
</div>
}
);
}
export default ThreadDisplay;