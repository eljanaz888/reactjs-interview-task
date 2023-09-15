import { db } from "./firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";

const coll = collection(db, "notes");

//functions for notes
export const getNote = async () => {
    const data = await getDocs(coll);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addNote = async (note) => {
    console.log("note", note);
    await addDoc(coll, note);
};

export const deleteNote = async (id) => {
    await deleteDoc(coll, id);
};

export const updateNote = async (note) => {
    const id = note.id;
    const noteRef = doc(coll, id);

    const noteDoc = await getDoc(noteRef);

    if (noteDoc.exists()) {
        await updateDoc(noteRef, note);
    } else {
        console.error("Document does not exist:", id);
    }
};

export const getAllNotes = async () => {
    const data = await getDocs(coll);
    return data.docs.map((doc) => doc.data());
};

export const getNotesByUid = async (uid) => {
    let qry = query(coll, where("uid", "==", uid));
    let querySnapshot = await getDocs(qry);
    return querySnapshot.docs.map((doc) => doc.data());
};
