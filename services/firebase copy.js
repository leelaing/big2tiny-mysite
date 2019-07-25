import firebase from 'firebase/app'
import auth from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDZXaU_ng1zOu_HDyCJFc2CvriTzfSdv0I',
  authDomain: 'big2tiny-38f5a.firebaseapp.com',
  databaseURL: 'https://big2tiny-38f5a.firebaseio.com',
  projectId: 'big2tiny-38f5a',
  storageBucket: 'big2tiny-38f5a.appspot.com',
  messagingSenderId: '709284831928',
  appId: '1:709284831928:web:a0932393bb6de29a'
}

!firebase.apps.length ? firebase.initializeApp(config) : ''

export default auth
