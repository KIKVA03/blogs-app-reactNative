import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { title: `blogPost #${state.length + 1}` }];
        default:
            return state;
    }
};
const addBlockPost = (dispatch) => {
    return () => dispatch({ type: "ADD" });
};

export const { Context, Provaider } = createDataContext(blogReducer, { addBlockPost }, []);
