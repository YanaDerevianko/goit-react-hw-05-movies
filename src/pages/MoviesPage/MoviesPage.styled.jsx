import styled from "@emotion/styled";
export const Title = styled.h1`
font-weight: 500;
font-size: 36px;
text-align: center;
color:#2f4f4f;
`
export const SearchForm = styled.form`
display: flex;
justify-content: center;
width: 700px;
height: 40px;
margin: 10px auto;
border: 1ps  solid #DCDCDC;
`

export const InputForm = styled.input`
width: 500px;
&[placeholder] {
font-size: 18px;
color:#DCDCDC; 
}
`

export const FormButton = styled.button`
width: 100px;
font-size: 20px;
font-weight: 500;

`
export const ListMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin:0;
`;
export const MovieItem = styled.li`
  width: 450px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  margin-bottom: 20px;
  border: 2px solid #808080;
`;
export const MoviePoster = styled.img`
  width: 440px;
  height: 280px;
  margin: 0 auto;
`;
export const MovieTitle = styled.p`
text-align: center;
font-size: 20px;
font-weight: 500;
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

