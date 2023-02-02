import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
    const { addBlockPost } = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlockPost(title, content, () => {
                    navigation.push("index");
                });
            }}
        />
    );
};

export default CreateScreen;
