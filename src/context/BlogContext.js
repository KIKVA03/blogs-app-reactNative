import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "edit":
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blogPost;
                }
            });
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
    return (title, content, callBack) => {
        dispatch({ type: "ADD", payload: { title, content } });
        callBack();
    };
};
const deleteBlockPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "DELETE", payload: id });
    };
};

const editBlockPost = (dispatch) => {
    return (id, title, content, callBack) => {
        dispatch({ type: "edit", payload: { id, title, content } });
        callBack();
    };
};

export const { Context, Provaider } = createDataContext(
    blogReducer,
    { addBlockPost, deleteBlockPost, editBlockPost },
    [{ title: "Test", content: "Test Content", id: 1 }]
);
