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
