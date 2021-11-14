import styled from "@emotion/styled";

export const ContentBox = styled.div`
  margin: 0 auto;
  height: auto;
  width: 1250px;
`;
export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #2f4f4f;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin:0;
`;
export const ListItem = styled.li`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  margin-bottom: 20px;
  border: 2px solid #808080;
`;
export const Image = styled.img`
  width: 290px;
  height: 430px;
  margin: 0 auto;
`;
export const NavLinkStyle = {
  display: "inline-block",
  textDecoration: "none",
  fontWeight: 500,
  color: "#2F4F4F",
  fontSize: "18px",
  textAlign: "center",
  padding: "10px"
};
