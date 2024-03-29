import fetchMock from 'jest-fetch-mock';
import { DbService } from "../db.service";
import { waitFor } from "@testing-library/react";
import { DbObject } from "../../store/db/types";

describe('DB service', () => {
  describe('loadDbFile', () => {
    beforeEach(() => {
      fetchMock.enableMocks();
    });

    afterEach(() => {
      fetchMock.resetMocks();
    });

    it('should be able to download DB file', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ mock: true }));
      const result = await DbService.loadDbFile('url');

      await waitFor(() => {
        expect(result).toStrictEqual({ mock: true });
      });

      await waitFor(() => {
        expect(fetchMock.mock.calls[0][0]).toBe('url');
      });
    });

    it('should return null on error', async () => {
      fetchMock.mockRejectedValue(false);
      const result = await DbService.loadDbFile('url');

      await waitFor(() => {
        expect(result).toBe(null);
      });
    });
  });

  describe('getImageUrl', () => {
    it('should return placeholder image for unknown objects types', () => {
      expect(DbService.getImageUrl({} as DbObject)).toBe('/assets/no-image.png');
    });

    it('should return correct url for people obj', () => {
      expect(DbService.getImageUrl({
        id: '0',
        name: 'name',
        height: 'height',
        gender: 'gender',
      } as unknown as DbObject)).toBe('/assets/content/people/0.png');
    });

    it('should return correct url for planet obj', () => {
      expect(DbService.getImageUrl({
        id: '0',
        name: 'name',
        rotation_period: 'rotation_period',
      } as unknown as DbObject)).toBe('/assets/content/planets/0.png');
    });
  });

  describe('getUrl', () => {
    it('should return empty string for unknown objects types', () => {
      expect(DbService.getUrl({} as DbObject)).toBe('');
    });

    it('should return correct url for people obj', () => {
      expect(DbService.getUrl({
        id: '0',
        name: 'name',
        height: 'height',
        gender: 'gender',
      } as unknown as DbObject)).toBe('/people/0');
    });

    it('should return correct url for planet obj', () => {
      expect(DbService.getUrl({
        id: '0',
        name: 'name',
        rotation_period: 'rotation_period',
      } as unknown as DbObject)).toBe('/planets/0');
    });
  });
});
