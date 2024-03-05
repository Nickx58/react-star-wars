import React from "react";
import { PlanetDetailProps } from "./types";
import { useParams } from "react-router";
import { DbService } from "../../services/db.service";
import { EntityDetailPage } from "../../components/EntityDetailPage/EntityDetailPage";

export function PlanetDetail({
  people,
  planets,
}: PlanetDetailProps): JSX.Element | null {
  const { id } = useParams<'id'>();

  if (!people || !planets || !id) {
    return null;
  }

  const entity = planets[id];
  const image = DbService.getImageUrl(entity);
  const entityProps = {
    'rotation period': entity.rotation_period,
    'orbital period': entity.orbital_period,
    'diameter': entity.diameter,
    'climate': entity.climate,
    'gravity': entity.gravity,
    'terrain': entity.terrain,
    'surface water': entity.surface_water,
    'population': entity.population,
  }

  return (
    <EntityDetailPage name={entity.name} image={image} charProps={entityProps} />
  );
}
