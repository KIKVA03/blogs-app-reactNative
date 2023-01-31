import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { title: `blogPost #${state.length + 1}` }];
        default:
            return state;
    }
};
export const BlogProvaider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    // const [blogPosts, setBlogPosts] = useState([]);
    const addBlockPost = () => {
        dispatch({ type: "ADD" });
    };
    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlockPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
