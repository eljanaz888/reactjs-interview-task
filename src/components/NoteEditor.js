import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const NoteEditor = ({
    selectedNote,
    handleSave,
    handleDelete,
    handleCancel,
}) => {
    // Set up state for edited note
    const [editedNote, setEditedNote] = useState(selectedNote);

    // Effect for edited note
    useEffect(() => {
        setEditedNote(selectedNote);
    }, [selectedNote]);

    // Handle title and description changes
    const handleTitleChange = (title) => {
        setEditedNote({ ...editedNote, title });
    };

    const handleDescriptionChange = (description) => {
        setEditedNote({ ...editedNote, description });
    };

    // Handle save, delete, and cancel functions for editing notes
    const onSaveNote = () => {
        handleSave(editedNote);
    };

    const onDeleteNote = () => {
        handleDelete(editedNote);
    };

    const onCancelEdit = () => {
        handleCancel();
    };

    return (
        <div className="container m-2"
            style={{
                width: "35%",
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflowY: "auto",
                height: "100vh",
            }}>
            <div className="d-flex align-items-center justify-content-between mt-2">
                <h3 style={{ fontSize: '24px' }}>Edit Note</h3>
                <Button variant="outline-secondary" onClick={onCancelEdit}>
                    Cancel Editing
                </Button>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        value={editedNote.title}
                        onChange={(e) => {
                            handleTitleChange(e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={editedNote.description}
                        style={{ resize: "none" }}
                        onChange={(e) => {
                            handleDescriptionChange(e.target.value);
                        }}
                    />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <Button variant="danger" onClick={onDeleteNote}>
                        <div className="d-flex align-items-center gap-1">
                            <span>Delete Note</span>

                            <BsFillTrashFill />
                        </div>
                    </Button>
                    <Button variant="success" onClick={onSaveNote}>
                        <div className="d-flex align-items-center gap-1">
                            <span>Save Changes</span>

                            <TiTick />
                        </div>
                    </Button>
                </div>
            </Form>
        </div >
    );
};

export default NoteEditor;
