import firebase from 'firebase';
import functions from 'firebase-functions';
import admin from 'firebase-admin';
import algoliaSearch from 'algoliasearch';

const ALGOLIA_APP_ID = '';
const ALGOLIA_ADMIN_KEY = '';
const ALGOLIA_INDEX_NAME = 'products'

const firebaseConfig = {
  apiKey: "AIzaSyDrvOONXDOWFDhDJ4Wi_RshmFUBnLBVOEE",
  authDomain: "fishing-store-34c6c.firebaseapp.com",
  projectId: "fishing-store-34c6c",
  storageBucket: "fishing-store-34c6c.appspot.com",
  messagingSenderId: "1036013151666",
  appId: "1:1036013151666:web:dbb250af1df3d3ee7c70ab"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };