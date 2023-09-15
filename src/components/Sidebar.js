import { Button } from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretRight, AiFillFolder, AiOutlinePlus } from "react-icons/ai";

const Sidebar = ({ categories, onAddCategory, setSelectedCategory, selectedCategory, setSelectedNote, setShowNoteForm, notes }) => {


    //count notes by category
    const countNotesByCategory = (category) => {
        return notes.filter((note) => note.categoryId === category.id).length;
    };

    return (
        <>
            <div
                className="container m-2"
                style={{
                    width: "25%",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflowY: "auto",
                    height: "100vh",
                }}
            >
                <div className="bg-light border-right mt-2">
                    <div className="list-group list-group-flush">
                        {/* Create Category Button */}
                        <Button
                            variant="success"
                            className="btn-block"
                            onClick={onAddCategory}
                        >
                            <div className="d-flex align-items-center gap-1">
                                <span>Create a Category</span>
                                <AiOutlinePlus />
                            </div>
                        </Button>


                        {/* List of Categories */}
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                className={`p-1 my-2 btn-block d-flex align-items-center justify-content-start gap-1 ${selectedCategory === category ? "btn-secondary" : ""
                                    }`}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setSelectedNote(null);
                                    setShowNoteForm(false);
                                }}
                            >
                                <AiFillFolder size={28} color="white" />

                                {`Category ${index + 1}`} {` (${countNotesByCategory(category)})`}
                                {selectedCategory === category ? <AiFillCaretRight /> : <AiFillCaretDown />}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
