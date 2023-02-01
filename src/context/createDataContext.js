import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    const Context = React.createContext();
    const Provaider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
    };

    return { Context, Provaider };
};
