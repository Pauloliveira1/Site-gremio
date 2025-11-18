// Importar Firebase (versão modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCW0Se5_lPtquxKMaryNyUHnAvoUmHkSCA",
  authDomain: "virtual-mudar.firebaseapp.com",
  projectId: "virtual-mudar",
  storageBucket: "virtual-mudar.firebasestorage.app",
  messagingSenderId: "984944463684",
  appId: "1:984944463684:web:3134eb7719b68bf36f9111",
  measurementId: "G-YFYEJX10DY"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
