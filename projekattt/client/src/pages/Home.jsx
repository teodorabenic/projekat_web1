import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Title = styled.h1`
  margin: 20px;
  display:flex;
  justify-content:center;

`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'black',
};

const Home = () => {

  const cat = "popular";
  const filters = "";
  const sort = "";

  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Link to={`/products/popular`} style={linkStyle}>      
      <Title>POPULARNI PROIZVODI</Title></Link>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer/>
    </div>
  );
};

export default Home;