import { DbState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dbActions } from "./actions";
import { Char } from "./entities/char.d";
import { Planet } from "./entities/planet.d";

const initialState: DbState = {
  people: null,
  planets: null,
};

export const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      dbActions.fillPeople.type,
      (state, action: PayloadAction<Record<string, Char>>) => {
        state.people = action.payload;
      },
    );
    builder.addCase(
      dbActions.fillPlanets.type,
      (state, action: PayloadAction<Record<string, Planet>>) => {
        state.planets = action.payload;
      },
    );
  },
});
