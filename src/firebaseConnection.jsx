import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBug_d4gzjgjPrq7NTPsuRlxQC0jw4DLzU",
  authDomain: "controlcartoperador.firebaseapp.com",
  projectId: "controlcartoperador",
  storageBucket: "controlcartoperador.appspot.com",
  messagingSenderId: "1066689518134",
  appId: "1:1066689518134:web:c5c2d0b6659b98aef01697",
  measurementId: "G-SHK5XSMEPY"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);  // Aqui o Firestore é inicializado corretamente

// Exporta o Firestore
export { db };