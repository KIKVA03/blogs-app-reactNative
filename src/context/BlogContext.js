import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "DELETE":
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case "ADD":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                },
            ];
        default:
            return state;
    }
};
const addBlockPost = (dispatch) => {
    return (title, content) => dispatch({ type: "ADD", payload: { title, content } });
};
const deleteBlockPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "DELETE", payload: id });
    };
};

export const { Context, Provaider } = createDataContext(
    blogReducer,
    { addBlockPost, deleteBlockPost },
    []
);
