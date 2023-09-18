import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDt-z1w0zPlemMbWRvNvhLrN9miRA1rz9w",
  authDomain: "imagegallerydragdrop.firebaseapp.com",
  projectId: "imagegallerydragdrop",
  storageBucket: "imagegallerydragdrop.appspot.com",
  messagingSenderId: "1023507353298",
  appId: "1:1023507353298:web:297ff9e64d6a0ad1ea270b"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);