import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAYO1k1W6uTM5TDbsGfWpOBnzisWW6WQfc",
    authDomain: "disney-hotstar-clone-9d63a.firebaseapp.com",
    projectId: "disney-hotstar-clone-9d63a",
    storageBucket: "disney-hotstar-clone-9d63a.appspot.com",
    messagingSenderId: "666107364906",
    appId: "1:666107364906:web:b833dda6ec2eb8ad82a553",
    measurementId: "G-WDQPFHMMH1"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getFirestore(app);

export { auth, provider, storage };
export default db;
