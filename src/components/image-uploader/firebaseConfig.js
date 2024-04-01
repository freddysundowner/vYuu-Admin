import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyDIBOqYj9HbLlcDbTqz597eSG9I81GmTG4",
  authDomain: "vyuu-33509.firebaseapp.com",
  projectId: "vyuu-33509",
  storageBucket: "vyuu-33509.appspot.com",
  messagingSenderId: "65319097700",
  appId: "1:65319097700:web:381829cf95f8ac35f69671",
});

const storage = getStorage(app);
export default storage;
