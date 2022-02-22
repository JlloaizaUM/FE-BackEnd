import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1gtlU5APcvDSsp9lz10sV9Mr2RiVH7_o",
  authDomain: "carta-b9e5b.firebaseapp.com",
  projectId: "carta-b9e5b",
  storageBucket: "carta-b9e5b.appspot.com",
  messagingSenderId: "399398664453",
  appId: "1:399398664453:web:39b5985efa7b889a4cdf6c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
