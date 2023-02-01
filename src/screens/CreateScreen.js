import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const { addBlockPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.title}>Enter Title:</Text>
            <TextInput style={styles.container} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.title}>Enter Content:</Text>
            <TextInput style={styles.container} onChangeText={(text) => setContent(text)} />
            {/* <Text>{title}</Text>
            <Text>{content}</Text> */}
            <Button title="ADD BLOG POST" onPress={() => addBlockPost(title, content)} />
        </View>
    );
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

export default CreateScreen;
