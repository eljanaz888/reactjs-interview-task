import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { addNote } from "../collections/notes";
import toast, { Toaster } from "react-hot-toast";

const NewNote = ({
    selectedCategory,
    setSelectedNote,
    selectedNote,
    notes,
    setNotes,
    uid,
    setShowNoteForm,
    showNoteForm,
}) => {

    //set up state
    const [newNote, setNewNote] = useState({
        title: "",
        description: "",
        id: uuidv4(),
    });
    const [searchQuery, setSearchQuery] = useState("");

    //usestate for width of container
    const [width, setWidth] = useState("70%");

    //condition for width of container if showNoteForm is true
    useEffect(() => {
        if (selectedNote) {
            setWidth("35%");
        } else {
            setWidth("70%");
        }
    }, [selectedNote]);

    //handle title and description changes
    const handleTitleChange = (e) => {
        setNewNote({ ...newNote, title: e.target.value });
    };

    const handleDescriptionChange = (e) => {
        setNewNote({ ...newNote, description: e.target.value });
    };

    //handle add new note function
    const addNewNote = async (e) => {
        if (selectedCategory) {
            const newNoteWithCategory = {
                ...newNote,
                categoryId: selectedCategory.id,
                uid: uid,
            };
            setNotes([...notes, newNoteWithCategory]);
            setNewNote({ title: "", description: "", id: uuidv4() });
            setShowNoteForm(false);
            await addNote(newNoteWithCategory);
            toast.success("Note Added Successfully");
        }
        e.preventDefault();
    };

    //handle note click function
    const handleNoteClick = (note) => {
        setSelectedNote(note);
    };

    //handle search function
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    };

    //filter notes by category and search query
    const filteredNotes = notes.filter((note) => {
        if (selectedCategory && note) {
            return (
                note.categoryId === selectedCategory.id &&
                (note.title.toLowerCase().includes(searchQuery) ||
                    note.description.toLowerCase().includes(searchQuery))
            );
        }
        return false;
    });


    return (

        <>
            {selectedCategory && (
                <div
                    className="container m-2"
                    style={{ width: width, backgroundColor: "#fff", borderRadius: "8px" }}
                >
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <Button variant="success" onClick={() => setShowNoteForm(true)}>
                            Add Note
                        </Button>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Search Notes"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        {showNoteForm && (
                            <div className="d-fixed">
                                <Form onSubmit={addNewNote}>
                                    <Form.Group>
                                        <Form.Label>Title:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={newNote.title}
                                            onChange={handleTitleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Description:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            value={newNote.description}
                                            onChange={handleDescriptionChange}
                                            required
                                            style={{ resize: "none" }}
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="mt-2">
                                        Save Note
                                    </Button>
                                </Form>
                            </div>
                        )}
                        {filteredNotes.map((note, index) => (
                            <div
                                onClick={() => handleNoteClick(note)}
                                key={index}
                                className="container mt-3 p-1"
                                style={{
                                    width: "100%",
                                    backgroundColor: "#fff",
                                    border: "1px solid #EFEFEF",
                                    cursor: 'pointer'
                                }}
                            >
                                <h5>{note.title}</h5>
                                <p>{note.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Toaster />
        </>
    );
};

export default NewNote;
