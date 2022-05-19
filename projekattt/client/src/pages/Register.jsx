import { useState } from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 99vw;
  height: 70vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor:pointer;
`;


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
  };
  return (
    <div>
    <Navbar></Navbar>

    <Container>
      <Wrapper>
        <Title>KREIRAJTE NALOG</Title>
        <Form>
          <Input placeholder="username" 
          onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}/>
          <Agreement>
          AKO JOŠ NEMATE NALOG, POMOĆU OVE OPCIJE PRISTUPITE OBRASCU ZA REGISTRACIJU.
          AKO NAM DATE SVOJE PODATKE, KUPOVINA NA VEB-SAJTU ĆE BITI BRŽA I LAKŠA.
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching} >KREIRAJ NALOG</Button>
        </Form>
      </Wrapper>
    </Container>
    <Footer></Footer>
    </div>
  );
};

export default Register;