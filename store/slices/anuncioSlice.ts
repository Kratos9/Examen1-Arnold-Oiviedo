import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AnuncioItem = {
  id: number;
  anuncio: string;
  persona: string;
  motivo: string;
  dni: string;
  vehiculo: string;
  imagen: string | null;
};

type AnuncioState = {
  items: AnuncioItem[];
};

const initialState: AnuncioState = {
  items: [],
};
                                                                                                    
const AnuncioSlice = createSlice({
  name: "anuncios",
  initialState,
  reducers: {
    AddAnuncioItem: (state, action: PayloadAction<Omit<AnuncioItem, "id">>) => {
      const newAnuncio = {
        id: Date.now(), // Generar un ID único basado en timestamp
        ...action.payload,
      };
      state.items.push(newAnuncio);
    },
  },
});

export const { AddAnuncioItem } = AnuncioSlice.actions;
export default AnuncioSlice.reducer;
