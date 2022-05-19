
import styled from "styled-components";
import {
  Link
} from "react-router-dom";




const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 650px;
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: flex-start;
  background-color: white;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;



const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Title = styled.div`
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Link to={`/product/${item._id}`}>
      <Info>
      </Info>
      </Link>
      <Title>
      {item.title}
    </Title>
    </Container>
  );
};

export default Product;