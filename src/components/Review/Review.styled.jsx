import styled from "@emotion/styled";


export const Title = styled.h1`
font-weight: 500;
font-size: 36px;
text-align: center
`;
export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1250px;
  padding: 10px;
  margin: 0 auto;
  list-style: none;
`;
export const OneReview = styled.li`
width: 1250px;
padding: 20px;
border: 2px solid #808080;
margin-bottom: 10px;
`;
export const AuthorReview = styled.p`
font-weight: 500;
font-size: 22px;
margin: 0;
`;
export const TextReview = styled.p`
font-size: 18px;
text-align: justify;
margin: 0;
`;
export const TextReviewNotFound = styled.p`
font-size: 18px;
text-align: center;

`;