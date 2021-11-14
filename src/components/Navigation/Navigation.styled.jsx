import styled from "@emotion/styled";

export const NavBlock = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #a9a9a9;
  position: relative;
  top: 0;
  left: 0;
`;

export const NavLinkStyle = {
  display: "inline-block",
  textDecoration: "none",
  padding: "12px",
  fontWeight: 500,
  color: "#696969",
  fontSize: "20px",
  marginRight: "50px",
};

export const ActiveNavLinkStyle = {
  color: "#000000",
};
