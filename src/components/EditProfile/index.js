import React, { Component } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import {db} from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  jobTitle: '',
  employer: '',
  bio: '',
  avatar: '',
  yearsExp: '',
  skills: [],
  isUploading: false,
  progress: 0,
  avatarURL: '',
  designation: '',
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
    event.preventDefault();
    
    const {
        id, 
        jobTitle,
        employer,
        bio,
        avatar,
        yearsExp,
        skills,
        avatarURL,
        designation,

         } = this.state;

   db.updateUser(
    this.props.uid,
    jobTitle,
    employer,
    bio,
    avatar,
    yearsExp,
    skills,
    avatarURL,
    designation,
   )
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.setState({id: this.props.uid})


      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });
    

  }



  handleChange = event => {
    console.log(event.target.value)
  }
  

  render() {
    console.log(this.props.uid)
    const { 
        jobTitle,
        employer,
        bio,
        avatar,
        yearsExp,
        skills,
        avatarURL,
        designation,

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
            onChange={event => this.state.skills.push(event.target.value)} />
        </label>
        <label>
          Database Administrator
          <input
            value="Database Administrator"
            type="checkbox"
            onChange={event => this.state.skills.push(event.target.value)} />
        </label>
        <select onChange={this.handleChange}>
        <option defaultValue value="none">Select if you want to be a Mentor or Mentee</option>
          <option value="mentee">Mentee</option>
          <option value="mentee">Mentor</option>
        </select>
        <br/>
        
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

export default EditProfileForm;