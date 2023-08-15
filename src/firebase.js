import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgA2bFm7iQG81rcxyFGD49ycD-XA5QEIk",
  authDomain: "blog-69f16.firebaseapp.com",
  projectId: "blog-69f16",
  storageBucket: "blog-69f16.appspot.com",
  messagingSenderId: "359411371214",
  appId: "1:359411371214:web:03495c44a91ca38a1fd49f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
