import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const { state, addBlockPost, deleteBlockPost } = useContext(Context);
    return (
        <View>
            <Button title="click" onPress={addBlockPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push("Show", { id: item.id })}>
                        <View style={styles.container}>
                            <Text style={styles.title}>
                                {item.title}-{item.id}
                            </Text>
                            <TouchableOpacity
                                style={{ height: "100%" }}
                                onPress={() => deleteBlockPost(item.id)}
                            >
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.push("Create")}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray",
    },

    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;
