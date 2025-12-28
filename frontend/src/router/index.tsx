import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/Home";
import BlogPage from "@/pages/blog/BlogPage";
import Blog from "@/pages/blog/Blog";
import CreatePost from "@pages/blog/CreatePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
  {
    path: "/blog/create-post",
    element: <CreatePost />,
  },
]);
