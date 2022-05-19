import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import { logout } from "../redux/apiCalls";


const Container = styled.div`
  height: 100px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size:70px;
  cursor:pointer;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
};


const Navbar = () => {

  const user = useSelector(state=>state.user.currentUser);

  const dispatch = useDispatch();

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  const handleClick = (e) => {
    e.preventDefault();
    logout(dispatch, user);
  };
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
  
          
          <Link to="/products/woman" style={linkStyle}>
          <MenuItem>ŽENE</MenuItem>
          </Link>
         
          <Link to="/products/man" style={linkStyle}>
          <MenuItem>MUŠKARCI</MenuItem>
          </Link>

          <Link to="/products/kids" style={linkStyle}>
          <MenuItem>DJECA</MenuItem>
          </Link>

        </Left>
        <Center>
          <Logo onClick={routeChange}>STEP 1</Logo>
        </Center>
        <Right>
          <Link to="/register" style={linkStyle}>
          <MenuItem>REGISTRUJ SE</MenuItem>
          </Link>

          {user ?     
          <MenuItem onClick={handleClick} style={linkStyle} >ODJAVI SE</MenuItem>
           :
          <Link to="/login" style={linkStyle}>
          <MenuItem>PRIJAVI SE</MenuItem>
          </Link>
          }
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;