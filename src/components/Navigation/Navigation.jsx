import { NavLink } from "react-router-dom";
import {NavLinkStyle, ActiveNavLinkStyle, NavBlock } from './Navigation.styled.jsx';

export const Navigation = () => {
  return (
    <NavBlock>
      <NavLink exact to ="/" style={NavLinkStyle} activeStyle={ActiveNavLinkStyle}>Home</NavLink>
      <NavLink to="/movies" style={NavLinkStyle} activeStyle={ActiveNavLinkStyle}>Movies</NavLink>
    </NavBlock>
  );
};
