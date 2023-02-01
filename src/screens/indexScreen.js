import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
    const { state, addBlockPost } = useContext(Context);
    return (
        <View>
            <Button title="click" onPress={() => navigation.push("bot")} />
            <Button title="click" onPress={addBlockPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    );
};

export default IndexScreen;
