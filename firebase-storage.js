// firebase-storage.js

import { storage } from "./firebase-config.js";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

export function uploadImagem(file, pasta = "uploads") {
  return new Promise((resolve, reject) => {
    const caminho = ${pasta}/${Date.now()}_${file.name};
    const storageRef = ref(storage, caminho);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      null,
      err => reject(err),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      }
    );
  });
}
