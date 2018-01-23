// import React, { Component } from 'react';
// import FileUploader from 'react-firebase-file-uploader';
// import firebase from 'firebase';
// import {db} from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  
  jobTitle: '',
  empoyer: '',
  bio: '',
  avatar: '',
  yearsExp: '',
  skills: [],
  isUploading: false,
  progress: 0,
  avatarURL: '',
  error: null,
};

class EditProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
  this.setState({isUploading: false});
  console.error(error);
  }
  handleUploadSuccess = (filename) => {
  this.setState({avatar: filename, progress: 100, isUploading: false});
  firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };

  onSubmit = (event) => {
    const { 
        jobTitle,
        employer,
        bio,
        avatar,
        yearsExp,
        skills,
        avatarURL,
         } = this.state;

   db.updateUser(
    jobTitle,
    employer,
    bio,
    avatar,
    yearsExp,
    skills,
    avatarURL,
   )
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        // history.push(routes.HOME);
        console.log("here")
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });
    

    event.preventDefault();
  }
  

  render() {
    const { 
        jobTitle,
        employer,
        bio,
        avatar,
        yearsExp,
        skills,
        avatarURL,

         } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={jobTitle}
          onChange={event => this.setState(updateByPropertyName('jobTitle', event.target.value))}
          type="text"
          placeholder="Job Title"
        />
        <input
          value={employer}
          onChange={event => this.setState(updateByPropertyName('employer', event.target.value))}
          type="text"
          placeholder="Employer"
        />
        <input
          value={bio}
          onChange={event => this.setState(updateByPropertyName('bio', event.target.value))}
          type="text"
          placeholder="Your Bio"
        />
        <input
          value={yearsExp}
          onChange={event => this.setState(updateByPropertyName('yearsExp', event.target.value))}
          type="number"
          placeholder="Years of Professional Experience"
        />
        <label>
          Web Developer
          <input
            value="Web Developer"
            type="checkbox"
            onChange={event => this.state.skills.concat([this.state.value])} />
        </label>
        <label>
          Database Administrator
          <input
            value="Database Administrator"
            type="checkbox"
            onChange={event => this.state.skills.concat([this.state.value])} />
        </label>
        
        <label>Image:</label>
        {this.state.isUploading &&
        <p>Progress: {this.state.progress}</p>
        }
        {this.state.avatarURL &&
        <img src={this.state.avatarURL} />
        }
        <FileUploader
        accept="image/*"
        name="avatar"
        randomizeFilename
        storageRef={firebase.storage().ref('images')}
        onUploadStart={this.handleUploadStart}
        onUploadError={this.handleUploadError}
        onUploadSuccess={this.handleUploadSuccess}
        onProgress={this.handleProgress}
        />
        <button type="submit">
          Update Profile
        </button>

        { this.state.error && <p>{this.state.error.message}</p> }
      </form>
    );
  }
}

// export default EditProfileForm;