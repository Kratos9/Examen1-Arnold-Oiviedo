import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice"
import usersReducer from "./slices/usersSlice"
import AnuncioReducer from "./slices/anuncioSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        anuncios: AnuncioReducer,
    }

});
store.subscribe(() => { console.log("Estado actualizado:", store.getState()); });
export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

