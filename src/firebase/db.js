import { db } from './firebase';


// User API

export const doCreateUser = (id, firstname, lastname, email) =>
  db.ref(`users/${id}`).set({
    firstname,
    lastname,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const getUser = (id) =>
  db.ref(`users/${id}`).once('value');

export const updateUser = (
  id,
  jobTitle,
  employer,
  bio,
  avatar,
  yearsExp,
  skills,
  avatarURL,
  designation
) => 
db.ref(`users/${id}`).update({

  jobTitle,
  employer,
  bio,
  avatar,
  yearsExp,
  skills,
  avatarURL,
  designation
});

// export const chat = () => {
  
// }


// db.ref("Users").once('value',function(s){
//   var users = s.val()
//   var newUsers = {}
//   for(var key in users) {
//       newUsers[key+'somekey'] = 2
//   }
//   fb.ref("Users").update(newUsers)
// });
// export const getMatchedUsers = () =>
// db.ref('users').orderByChild('databaseAdmin').equalTo('Database Administrator').on("value");


