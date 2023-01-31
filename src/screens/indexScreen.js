import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
    const { data, addBlockPost } = useContext(BlogContext);
    return (
        <View>
            <Button title="click" onPress={() => navigation.push("bot")} />
            <Button title="click" onPress={addBlockPost} />
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    );
};

export default IndexScreen;
