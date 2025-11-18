// firebase-auth.js

import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

export function loginUsuario(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

export function logoutUsuario() {
  return signOut(auth);
}

export function observarAuth(callback) {
  return onAuthStateChanged(auth, callback);
}
