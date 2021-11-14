import styled from "@emotion/styled";

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1300px;
  padding: 10px;
  margin: 0 auto;
  list-style: none;
`;
export const OneCast = styled.li`
width: 360px;
height: 550px;
margin-bottom: 10px;
padding: 10px 10px 40px 10px;
border: 2px solid #808080;
`;
export const Title = styled.h1`
font-weight: 500;
font-size: 36px;
text-align: center
`;
export const CastFoto = styled.img`
width: 360px;
height: 530px;
`;
export const CastName = styled.p`
font-weight: 500;
font-size: 22px;
text-align: center;
margin: 0;
`;
export const CastRole = styled.p`
font-size: 18px;
text-align: center;
margin: 0;
`;

