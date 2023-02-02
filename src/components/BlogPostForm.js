import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.title}>Enter Title:</Text>
            <TextInput style={styles.container} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.title}>Enter Content:</Text>
            <TextInput style={styles.container} onChangeText={(text) => setContent(text)} />

            <Button
                title="save BLOG POST"
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    );
};
BlogPostForm.defaultProps = {
    initialValues: { title: "", content: "" },
};
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },

    title: {
        fontSize: 18,
        marginBottom: 5,
        paddingHorizontal: 5,
    },
    icon: {
        fontSize: 24,
    },
});

export default BlogPostForm;
