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

/ firebase-db.js
import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Collections helper
const noticiasCol = () => collection(db, "noticias");
const avisosCol = () => collection(db, "avisos");
const eventosCol = () => collection(db, "eventos");
const contatosCol = () => collection(db, "contatos");

// Create
export async function publicarNoticia(titulo, conteudo) {
  return await addDoc(noticiasCol(), { titulo, conteudo, criadoEm: serverTimestamp() });
}
export async function publicarAviso(titulo, conteudo) {
  return await addDoc(avisosCol(), { titulo, conteudo, criadoEm: serverTimestamp() });
}
export async function publicarEvento(obj) { // obj: {titulo, descricao, data, imagemUrl?}
  return await addDoc(eventosCol(), { ...obj, criadoEm: serverTimestamp() });
}
export async function salvarContato(nome, email, assunto, mensagem) {
  return await addDoc(contatosCol(), { nome, email, assunto, mensagem, criadoEm: serverTimestamp() });
}

// Read (all ordered by created date desc)
export async function listarNoticias() {
  const q = query(noticiasCol(), orderBy("criadoEm", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
export async function listarAvisos() {
  const q = query(avisosCol(), orderBy("criadoEm", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
export async function listarEventos() {
  const q = query(eventosCol(), orderBy("criadoEm", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
export async function listarContatos() {
  const q = query(contatosCol(), orderBy("criadoEm", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Update / Delete
export async function editarDoc(collectionName, id, data) {
  const d = doc(db, collectionName, id);
  return await updateDoc(d, data);
}
export async function excluirDoc(collectionName, id) {
  const d = doc(db, collectionName, id);
  return await deleteDoc(d);
}
export async function buscarDoc(collectionName, id){
  const d = doc(db, collectionName, id);
  const snap = await getDoc(d);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}
