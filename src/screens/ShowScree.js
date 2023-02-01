import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Context } from "../context/BlogContext";

const Showscreen = ({ navigation }) => {
    const { state, deleteBlockPost } = useContext(Context);

    const ID = navigation.getParam("id");
    const blogpost = state.find((post) => post.id === ID);
    return (
        <View>
            <Text>
                {blogpost.title}--{blogpost.id}
            </Text>
        </View>
    );
};

export default Showscreen;
