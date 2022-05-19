import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  // console.log(cat,filters,sort);


  const [products, setProducts] = useState([]); //use state je funkcija koja dozvoljava pisanje funkcije u komponenti i pracenje podataka kroz komponente
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => { //useEffect funkcija govori da kompoenta mora nesto da uradi nakon renderovanja komponente,  ovom slucaju, nakon promjmene cat (kategorije) pozovi ovu funkciju
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat? `http://localhost:5000/api/products?category=${cat}`: "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => //.filter, filtrira elemente niza/objekta u zavisnosti od funkcije koja je zadata
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value) //u ovom slucaju, filtriraj sve elemente koji za odredjeni key imaju value, tj filter
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;