import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
    const { state, deleteBlockPost } = useContext(Context);

    const ID = navigation.getParam("id");
    const blogpost = state.find((post) => post.id === ID);
    return (
        <View style={{ width: "100%", alignItems: "center", paddingVertical: 60 }}>
            <Text style={{ fontSize: 28, paddingBottom: 10 }}>{blogpost.title}</Text>
            <Text style={{ fontSize: 20, color: "gray" }}>
                {blogpost.content && blogpost.content}
            </Text>
        </View>
    );
};
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.push("Edit", { id: navigation.getParam("id") })}
            >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

export default ShowScreen;
