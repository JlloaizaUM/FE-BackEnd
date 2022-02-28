
import { initializeApp } from "firebase/app";


  const firebaseConfig = {

  apiKey: "AIzaSyAFxkUbnU2pY1cbHZip6gS7wXg4ov5jf0k",
  authDomain: "bonapettit-app.firebaseapp.com",
  projectId: "bonapettit-app",
  storageBucket: "bonapettit-app.appspot.com",
  messagingSenderId: "165658321350",
  appId: "1:165658321350:web:e804993172d6e88db8d2c7",
  measurementId: "G-XMPLC0YL1Y"
  };

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);