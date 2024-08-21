import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJ3KHo2TM8rvcCtFT7cWqv2ah_DKL1NtU",
  authDomain: "proyectodetitulo-3f8c7.firebaseapp.com",
  projectId: "proyectodetitulo-3f8c7",
  storageBucket: "proyectodetitulo-3f8c7.appspot.com",
  messagingSenderId: "974231405386",
  appId: "1:974231405386:web:dfd96b9a6377da2abb77b3"
};

// Inicializa la app de Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore para usarla en otros componentes
export { db };