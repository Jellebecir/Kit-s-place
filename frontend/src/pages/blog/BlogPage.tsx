import BlogList from "@/features/blogs/components/BlogList";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BlogPage() {
    const navigate = useNavigate();
    const handleCreatePost = () => {
        // route to create post page
        navigate("/blog/create-post");
    };

    return (
        <div>
            <h1>Kit's blog</h1>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleCreatePost}
            >
                Create New Post
            </Button>
            <BlogList />
        </div>
    );
}

export default BlogPage;