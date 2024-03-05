import React from "react";
import { CharDetailProps } from "./types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { DbService } from "../../services/db.service";
import { URI } from "../../routes/uri";
import { EntityDetailPage } from "../../components/EntityDetailPage/EntityDetailPage";

export function CharDetail({
  people,
  planets,
}: CharDetailProps): JSX.Element | null {
  const { id } = useParams<'id'>();

  if (!people || !planets || !id) {
    return null;
  }

  const entity = people[id];
  const image = DbService.getImageUrl(entity);
  const charProps = {
    'Height': entity.height,
    'Mass': entity.mass,
    'Hair color': entity.hair_color,
    'Skin color': entity.skin_color,
    'Eye color': entity.eye_color,
    'Birth year': entity.birth_year,
    'Gender': entity.gender,
    'Home world': <Link to={URI.planets.detail.replace(':id', entity.homeworld)}>{planets[entity.homeworld].name}</Link>,
  }

  return (
    <EntityDetailPage name={entity.name} image={image} charProps={charProps} />
  );
}
