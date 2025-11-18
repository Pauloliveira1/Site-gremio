import { app } from "./firebase-config.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

export const db = getFirestore(app);

// Função de teste para salvar algo no banco
export async function salvarContato(nome, email, mensagem) {
  await addDoc(collection(db, "contatos"), {
    nome,
    email,
    mensagem,
    data: new Date()
  });
}
