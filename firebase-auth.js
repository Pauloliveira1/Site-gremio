import { app } from "./firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

export const auth = getAuth(app);

// Exemplo de cadastro
export async function registrar(email, senha) {
  return await createUserWithEmailAndPassword(auth, email, senha);
}

// Exemplo de login
export async function entrar(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha);
}

// Exemplo de logout
export async function sair() {
  return await signOut(auth);
}

// firebase-auth.js
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

export async function registrarUsuario(email, senha) {
  return await createUserWithEmailAndPassword(auth, email, senha);
}
export async function loginUsuario(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha);
}
export async function logoutUsuario() {
  return await signOut(auth);
}
export function observarAuth(callback) {
  return onAuthStateChanged(auth, callback);
}
