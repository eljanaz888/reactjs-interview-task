import { db } from "./firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";

const coll = collection(db, "categories");

//functions for categories
export const getCategories = async () => {
    const data = await getDocs(coll);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addCategory = async (category) => {
    await addDoc(coll, category);
};

export const deleteCategory = async (id) => {
    await deleteDoc(coll, id);
};

export const getCategoriesByUid = async (uid) => {
    let qry = query(coll, where("uid", "==", uid));
    let querySnapshot = await getDocs(qry);
    return querySnapshot.docs.map((doc) => doc.data());
};
