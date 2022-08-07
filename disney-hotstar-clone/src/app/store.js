import {configureStore} from '@reduxjs/toolkit' ;
import userReducer from "../features/users/userSlice";
import movieReducer from "../features/movie/movieSlicer";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

