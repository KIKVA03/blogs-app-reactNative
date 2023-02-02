import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
    const { state, editBlockPost } = useContext(Context);
    const ID = navigation.getParam("id");
    const blogPost = state.find((post) => post.id === ID);
    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlockPost(ID, title, content, () => navigation.pop());
            }}
        />
    );
};

export default EditScreen;
