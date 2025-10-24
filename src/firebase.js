// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,  getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCByl8kVhsp8OuPc5_1ycC_VFHQzumpQbo",
  authDomain: "netflixe-clone-71c65.firebaseapp.com",
  projectId: "netflixe-clone-71c65",
  storageBucket: "netflixe-clone-71c65.firebasestorage.app",
  messagingSenderId: "1078675921380",
  appId: "1:1078675921380:web:1669f684b3ad1b0ac88ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authprovider: "local", email,
    });
  } catch (error) {
    console.log(error)
    alert(error);
  };

}
const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

  } catch (error) {
    console.log(error)
    alert(error);
  }
}
const logout=()=>{
  signOut(auth);
}
export{auth,db,login,signup,logout}