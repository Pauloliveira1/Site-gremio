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

// firebase-config.js
// Versão modular via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCW0Se5_lPtquxKMaryNyUHnAvoUmHkSCA",
  authDomain: "virtual-mudar.firebaseapp.com",
  projectId: "virtual-mudar",
  storageBucket: "virtual-mudar.firebasestorage.app",
  messagingSenderId: "984944463684",
  appId: "1:984944463684:web:3134eb7719b68bf36f9111",
  measurementId: "G-YFYEJX10DY"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
