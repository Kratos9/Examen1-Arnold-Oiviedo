import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./slices/userSlice"
import AnuncioReducer from "./slices/anuncioSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        anuncios: AnuncioReducer,
    }

});
store.subscribe(() => { console.log("Estado actualizado:", store.getState()); });
export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

