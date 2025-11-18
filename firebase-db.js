// firebase-db.js

import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Referências das coleções
const noticiasCol = () => collection(db, "noticias");
const avisosCol = () => collection(db, "avisos");
const eventosCol = () => collection(db, "eventos");
const contatosCol = () => collection(db, "contatos");

// Publicar
export function publicarNoticia(titulo, conteudo) {
  return addDoc(noticiasCol(), {
    titulo,
    conteudo,
    criadoEm: serverTimestamp()
  });
}

export function publicarAviso(titulo, conteudo) {
  return addDoc(avisosCol(), {
    titulo,
    conteudo,
    criadoEm: serverTimestamp()
  });
}

export function publicarEvento(data) {
  return addDoc(eventosCol(), {
    ...data,
    criadoEm: serverTimestamp()
  });
}

// Listar mensagens do formulário
export async function listarContatos() {
  const q = query(contatosCol(), orderBy("criadoEm", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => d.data());
}
