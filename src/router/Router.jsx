import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import HireMe from "../pages/HireMe";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/BlogDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "contact-with-me",
                element: <Contact />,
            },
            {
                path: "hire-me",
                element: <HireMe />,
            },
            {
                path: "blogs",
                element: <Blogs />,
            },
            {
                path: "blogs/:id",
                element: <BlogDetail />,
            }
        ],
    },
]);

export default router;
