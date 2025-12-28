import { useEffect, useState } from 'react';
import type { Blog } from '@kp-types/blogs';
import { Card } from '@mui/material';
import { NavLink } from 'react-router-dom';

function BlogList() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/blog`, { method: 'GET' })
        .then((res) => res.json())
        .then((data: Blog[]) => setBlogs(data))
        .catch((err) => console.error("API error:", err));
    }, []);

    return (
        <div>
            <h2>Blogs</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <NavLink to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
                            <Card style={{ padding: '10px', marginBottom: '10px' }}>
                                {blog.title}
                            </Card>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default BlogList;