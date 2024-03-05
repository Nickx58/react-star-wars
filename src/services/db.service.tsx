import { DbObject } from "../store/db/types";
import { isChar } from "../store/db/entities/char.d";
import { isPlanet } from "../store/db/entities/planet.d";
import { CatalogItemProps } from "../components/Catalog/CatalogCategory/CatalogCategory";

export const DbService = {
  async loadDbFile<Response>(url: string): Promise<null | Response> {
    try {
      return await (await fetch(url)).json();
    } catch (e: any) {
      console.error('Load DB failed', e.message);

      return null
    }
  },

  getImageUrl(dbObj: DbObject): string {
    const baseImageFolder = '/assets/content';

    if (isChar(dbObj)) {
      return `${baseImageFolder}/people/${dbObj.id}.png`;
    }

    if (isPlanet(dbObj)) {
      return `${baseImageFolder}/planets/${dbObj.id}.png`;
    }
    return '/assets/no-image.png';
  },

  getUrl(dbObj: DbObject): string {
    if (isChar(dbObj)) {
      return `/people/${dbObj.id}`;
    }
    if (isPlanet(dbObj)) {
      return `/planets/${dbObj.id}`;
    }
    return '';
  },

  getTitle(dbObj: DbObject): string {
    return dbObj.name;
  },

  getCategoryProps(entity: DbObject): CatalogItemProps {
    return {
      image: DbService.getImageUrl(entity),
      title: DbService.getTitle(entity),
      url: DbService.getUrl(entity),
      id: entity.id,
    }
  },

  getFullCategoryProps(dbObj: Record<string, DbObject>): CatalogItemProps[] {
    const ids = Object.keys(dbObj);
    return ids.map(id => {
      const entity = dbObj[id];
      return DbService.getCategoryProps(entity);
    });
  },

  getCategoryItems(ids: string[], dbObj: Record<string, DbObject>): CatalogItemProps[] {
    const availableIds = Object.keys(dbObj);

    return ids.filter((id) => availableIds.includes(id))
      .map(id => {
        const entity = dbObj[id];
        return DbService.getCategoryProps(entity);
      });
  },
};
