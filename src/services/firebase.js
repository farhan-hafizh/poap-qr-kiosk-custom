// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	doc,
	setDoc,
	// addDoc,
	// serverTimestamp,
	onSnapshot,
	query,
	orderBy,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCW58sCrgyRMkmHj3gG82m618ci3Sj7oCI",
	authDomain: "poap-qr-kiosk-8f6ef.firebaseapp.com",
	projectId: "poap-qr-kiosk-8f6ef",
	storageBucket: "poap-qr-kiosk-8f6ef.appspot.com",
	messagingSenderId: "908241028890",
	appId: "1:908241028890:web:1aa2da0eab719b40bacea3",
	measurementId: "G-LNJL2DT2BH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getData(callback) {
	return onSnapshot(
		query(collection(db, "poap"), orderBy("isScanned", "asc")),
		(querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			console.log(data);
			callback(data);
		}
	);
}

function editData(id, value) {
	const docRef = doc(db, "poap", id);
	setDoc(docRef, value);
}

export { getData, editData };
