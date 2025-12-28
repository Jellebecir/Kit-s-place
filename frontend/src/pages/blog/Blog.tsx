import type { Blog as BlogType } from "@kp-types/blogs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Blog() {
    const { id } = useParams<{ id: string }>();

    const [blog, setBlog] = useState<BlogType | null>(null);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/blog/${id}`, { method: 'GET' })
        .then((res) => res.json())
        .then((data: BlogType) => setBlog(data))
        .catch((err) => console.error("API error:", err));
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
        </div>
    );
}

export default Blog;