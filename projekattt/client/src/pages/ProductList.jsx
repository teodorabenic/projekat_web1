import styled from "styled-components";
import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
// import { Link } from "react-router-dom";


// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none",
//   color: 'black',
//   cursor:'pointer'
// };

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filteri:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value="white">Bijela</Option>
            <Option value="black">Crna</Option>
            <Option value="red">Crvena</Option>
            <Option value="pnk">Pink</Option>
            <Option value="brown">Braon</Option>
            <Option value="green">Zelena</Option>

          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>36</Option>
            <Option>37</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>41</Option>
            <Option>43</Option>
          </Select>

          <Select name="type" onChange={handleFilters}>
            <Option disabled>Tip</Option>
            <Option value="sandals">Sandale</Option>
            <Option value="sandal heels">Sandale sa štiklom</Option>
            <Option value="sneakers">Patike</Option>
            <Option vaalue="boots">Čizme</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortiraj po:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Najnovije</Option>
            <Option value="asc">Cijena (Najjeftinije prvo)</Option>
            <Option value="desc">Cjena (Najskuplje prvo)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;