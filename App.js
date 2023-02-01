import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provaider } from "./src/context/BlogContext";

import ShowScreen from "./src/screens/ShowScree";
import indexScreen from "./src/screens/indexScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator(
    {
        index: indexScreen,
        Show: ShowScreen,
        Create: CreateScreen,
    },
    {
        initialRoutName: "Show",
        defaultNavigationOptions: {
            title: " Blogs",
        },
    }
);
const App = createAppContainer(navigator);

export default () => {
    return (
        <Provaider>
            <App />
        </Provaider>
    );
};
