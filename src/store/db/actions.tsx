import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Char } from "./entities/char.d";
import { types } from "./types";
import { AppDispatch } from "../store";
import { DbService } from "../../services/db.service";
import { Planet } from "./entities/planet.d";

export const dbActions = Object.freeze({
  fillPeople: createAction<Record<string, Char> | null>(types.FILL_PEOPLE),
  fillPlanets: createAction<Record<string, Planet> | null>(types.FILL_PLANETS),

  // Async
  getDb: createAsyncThunk<
    void,
    void,
    {
      dispatch: AppDispatch;
    }
  >(types.GET_DB, async (arg, { dispatch }) => {
    dispatch(dbActions.fillPeople(await DbService.loadDbFile('/db/people.json')));
    dispatch(dbActions.fillPlanets(await DbService.loadDbFile('/db/planets.json')));
  }),
});
