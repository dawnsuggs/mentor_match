import { db } from './firebase';

// User API

export const doCreateUser = (id, firstname, lastname, username, email) =>
  db.ref(`users/${id}`).set({
    firstname,
    lastname,
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...
