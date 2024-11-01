// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfWHL-r07bBaIhPLeWkwDYmLmappJZ5wI",
  authDomain: "lista-de-compras-7e63d.firebaseapp.com",
  projectId: "lista-de-compras-7e63d",
  storageBucket: "lista-de-compras-7e63d.firebasestorage.app",
  messagingSenderId: "1072880331203",
  appId: "1:1072880331203:web:289a01d73f990091897576"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

export default app;
