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

export const updateUser = (
  id,
  jobTitle,
  employer,
  bio,
  url,
  yearsExp,
  skills,
  avatarURL,
  designation,
) =>
db.ref(`users/${id}`).update({

  jobTitle,
  employer,
  bio,
  url,
  yearsExp,
  skills,
  avatarURL,
  designation,
});

// Other db APIs ...
