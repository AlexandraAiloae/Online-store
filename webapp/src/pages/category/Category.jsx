﻿import "./CategoryStyles.css";

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";
import Navbar from "../../components/navbarMainPage/Navbar";

import { CategoriesContext } from "../../contexts/categories.context";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="categ">
      <Navbar color="#111" />
      <div className="category-container">
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Category;
