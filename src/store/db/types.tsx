import { Char } from "./entities/char.d";
import { Planet } from "./entities/planet.d";

export const types = Object.freeze({
  GET_DB: '[DB] GET_DB',
  FILL_PEOPLE: '[DB] FILL_PEOPLE',
  FILL_PLANETS: '[DB] FILL_PLANETS',
});

export interface DbState {
  people: Record<string, Char> | null;
  planets: Record<string, Planet> | null;
}

export type DbObject = Char | Planet;
