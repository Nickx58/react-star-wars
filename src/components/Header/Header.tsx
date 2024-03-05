import React from "react";
import './Header.scss';
import { MainMenu } from "../MainMenu/MainMenu";
import { Link } from "react-router-dom";
import { URI } from "../../routes/uri";

export const Header = (): JSX.Element => {
  return <div className="header">
    <MainMenu />
    <Link to={URI.home} className="header__logo" />
    <div></div>
  </div>
}
