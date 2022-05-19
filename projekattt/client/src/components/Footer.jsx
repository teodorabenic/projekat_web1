
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
  `;


  const Left = styled.div`
    margin:50px;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  

  const Right = styled.div`
    margin:50px;
    flex: 1;
    padding: 20px;
    display:flex;
    justify-content:flex-end;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  const Footer = () => {
    return (
      <Container>
        <Left>
        CRNA GORA / MONTENEGRO
        </Left>
        <Right>
        © ALL RIGHTS RESERVED
        </Right>
      </Container>
    );
  };
  
  export default Footer;