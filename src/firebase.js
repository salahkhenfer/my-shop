import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBLhl7M2Zvqc1thRQ5mz_DHqox9AS4OHwI",
  authDomain: "my-shop-7e352.firebaseapp.com",
  projectId: "my-shop-7e352",
  storageBucket: "my-shop-7e352.appspot.com",
  messagingSenderId: "696102774186",
  appId: "1:696102774186:web:78896dad5ebb79396ef7d3",
  measurementId: "G-ZE4Y1DN344",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
