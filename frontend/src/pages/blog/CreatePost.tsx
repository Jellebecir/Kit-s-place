import { TextEditor } from "@indoui/react-text-editor";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

function CreatePost() {
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        // handle post submission logic here
        console.log("Post content:", content);
    }

    return (
        <div>
            <h1>Create a New Blog Post</h1>
            <TextField 
                label="Title"
                fullWidth 
                placeholder="Enter blog title" 
                style={{ marginBottom: '20px' }} 
            />
            <TextEditor 
                value={content}
                onChange={setContent}
            />
            <Button 
                variant="contained" 
                color="primary"
                onClick={handleSubmit}
            >
                Post
            </Button>
        </div>
    );
}

export default CreatePost;