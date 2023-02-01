import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provaider } from "./src/context/BlogContext";

import BotScreen from "./src/screens/botScreen";
import indexScreen from "./src/screens/indexScreen";

const navigator = createStackNavigator(
    {
        index: indexScreen,
        bot: BotScreen,
    },
    {
        initialRoutName: "bot",
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
