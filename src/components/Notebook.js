//import hooks and components
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import NewNote from "./NewNote";
import NoteEditor from "./NoteEditor";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import { addCategory, getCategoriesByUid } from "../collections/categories";
import { getNotesByUid, updateNote } from "../collections/notes";
import { signOut } from "@firebase/auth";
import { auth } from "../collections/firebase";
import { Button } from "react-bootstrap";

const Notebook = ({ uid }) => {
    //set up state
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const [notes, setNotes] = useState([]);
    const [showNoteForm, setShowNoteForm] = useState(false);

    //effect for categories and notes
    useEffect(() => {
        getCategoriesByUid(uid).then((data) => {
            setCategories(data);
        });
    }, [uid]);

    useEffect(() => {
        getNotesByUid(uid).then((data) => {
            setNotes(data);
        });
    }, [uid]);

    //add category function
    const onAddCategory = async () => {
        const newCategory = {
            id: uuidv4(),
            name: `Category ${categories.length + 1}`,
            uid: uid,
        };
        setCategories([...categories, newCategory]);
        await addCategory(newCategory);
        toast.success("Category Added Successfully");
    };

    //handle save, delete, and cancel functions for editing notes
    const handleSave = async (note) => {
        setNotes((prev) => prev.map((item) => (item.id === note.id ? note : item)));
        setSelectedNote();
        await updateNote(note);
        toast.success("Note Saved Successfully");
    };

    const handleDelete = (note) => {
        setNotes((prev) => prev.filter((item) => item.id !== note.id));
        setSelectedNote();
        toast.success("Note Deleted Successfully");
    };

    const handleCancel = () => {
        setSelectedNote(null);
    };

    return (
        <>
            <div
                className="d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#1F2A44" }}
            >
                <h6 className="heading text-white p-2 m-1">Your Notes</h6>
                <Button
                    className="btn btn-danger m-2"
                    onClick={() => {
                        signOut(auth);
                    }}
                >
                    Sign Out
                </Button>
            </div>

            <div className="d-flex flex-row gap-1">
                <Sidebar
                    categories={categories}
                    onAddCategory={onAddCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                    setSelectedNote={setSelectedNote}
                    setShowNoteForm={setShowNoteForm}
                    notes={notes}
                />
                <NewNote
                    selectedCategory={selectedCategory}
                    selectedNote={selectedNote}
                    setSelectedNote={setSelectedNote}
                    notes={notes}
                    setNotes={setNotes}
                    uid={uid}
                    showNoteForm={showNoteForm}
                    setShowNoteForm={setShowNoteForm}
                />
                {selectedNote && (
                    <NoteEditor
                        selectedNote={selectedNote}
                        handleSave={handleSave}
                        handleDelete={handleDelete}
                        handleCancel={handleCancel}
                    />
                )}
            </div>
            <Toaster />
        </>
    );
};

export default Notebook;
