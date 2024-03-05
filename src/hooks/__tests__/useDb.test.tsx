/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDb } from "../useDb";
import { dbSlice } from "../../store/db/reducer";
import { DbService } from "../../services/db.service";
const { mocked } = jest;

jest.mock('../../services/db.service');

describe('useDB', () => {
  it('should dispatch correct action on mount', async function () {
    const UseDbRenderer = (): null => {
      useDb();
      return null;
    };

    const store = configureStore({
      reducer: dbSlice.reducer
    });

    const loadFileMock = mocked(DbService.loadDbFile);
    loadFileMock.mockImplementation((path) => {
      return Promise.resolve({
        test: "unit",
      });
    });

    render(<Provider store={store}><UseDbRenderer /></Provider>);

    await waitFor(() => {
      expect(loadFileMock).toBeCalledTimes(2);
      expect(loadFileMock).toBeCalledWith('/db/people.json');
      expect(loadFileMock).toBeCalledWith('/db/planets.json');

      expect(store.getState()).toStrictEqual({
        "people": { "test": "unit" },
        "planets": { "test": "unit" },
      });
    });
  });
});
