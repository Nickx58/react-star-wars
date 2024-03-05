import { HomeBanner } from "../../components/HomeBanner/HomeBanner";
import { CatalogCategory } from "../../components/Catalog/CatalogCategory/CatalogCategory";
import React from "react";
import { HomeProps } from "./types";
import { DbService } from "../../services/db.service";
import { URI } from "../../routes/uri";

export function Home({
  people,
  planets,
}: HomeProps): JSX.Element | null {
  if (!people || !planets) {
    return null;
  }

  return <>
    <HomeBanner />
    <CatalogCategory title="People" categoryUrl={URI.people.base} items={DbService.getCategoryItems(['1', '2', '3', '4', '5', '6'], people)} />
    <CatalogCategory title="Planets" categoryUrl={URI.planets.base} items={DbService.getCategoryItems(['1', '2', '3', '4', '5', '6'], planets)} />
  </>
}
