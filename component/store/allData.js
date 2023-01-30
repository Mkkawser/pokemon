import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemon: [],
  height: 0,
  weight: 0,
  species_url: "",
  stats: [],
  types: [],

  Pname: "",
  id: 0,
  img: "",

  description: "",
  category: "",
};

const All_Data = createSlice({
  name: "data",
  initialState,
  reducers: {
    add_data: (state, action) => {
      if (action.payload) {
        state.pokemon = action.payload.pokemons;
        state.weight = action.payload.pokemon.weight;
        state.height = action.payload.pokemon.height;
        state.species_url = action.payload.pokemon.species.url;
        state.stats = action.payload.pokemon.stats;
        state.types = action.payload.pokemon.types;
      }
    },
    add_pokemon: (state, action) => {
      state.Pname = action.payload.val.name;
      state.id = action.payload.val.id;
      state.img = action.payload.val.artwork;
    },
    add_species: (state, action) => {
      state.category = action.payload.genera;
      state.description = action.payload.flv_text;
    },
  },
});
export default All_Data.reducer;
export const { add_data, add_pokemon, add_species } = All_Data.actions;
