import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  line-height: 50px;
  font-size: 28px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  color: rgb(105, 105, 105);
  transition: all 0.3s;
  position: relative;
  border: none;
  border-radius: 7px;
  margin: 0 auto;
  font-weght: 500;
`;
export const InfoMovie = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 375px;
  height: 550px;
  margin-right: 36px;
  margin-left: 15px;
`;
export const InfoWrapper = styled.div`
  width: 375px;
  height: 550px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
`;
export const NavLinkStyle = {
  display: "inline-block",
  textDecoration: "none",
  padding: "12px",
  fontWeight: 500,
  color: "#696969",
  fontSize: "16px",
  margin: "0 auto",
  marginRight: "50px",
  border: "2px solid #696969",
  borderRadius: "7px",
  width: "70px",
  textAlign: "center",
};

export const ActiveNavLinkStyle = {
  color: "#000000",
};
export const LoaderBox = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
