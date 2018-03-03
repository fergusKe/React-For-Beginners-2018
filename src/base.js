import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCu8cObaOrUxQ0YbZuBnTgTi0mk7BrOhU8",
	authDomain: "react-for-beginners-6cfd2.firebaseapp.com",
	databaseURL: "https://react-for-beginners-6cfd2.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base