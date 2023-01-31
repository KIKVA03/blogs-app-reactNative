import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvaider = ({ children }) => {
    // const blogPosts = [{ title: "blog post #1" }, { title: "blog post #2" }];
    const [blogPosts, setBlogPosts] = useState([]);
    const addBlockPost = () => {
        setBlogPosts([...blogPosts, { title: `blog post #${blogPosts.length + 1}` }]);
    };
    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlockPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
