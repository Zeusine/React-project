import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
   
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Discover the finest pet food selection on our website, 
        designed to cater to your beloved furry companions' unique needs. 
        Our featured products include Wholesome Grain-Free Formula for sensitive pets, 
        Protein-Packed Poultry Blend for active ones, and Salmon & Sweet Potato Delight for fish lovers. 
        Ensure your young pets get the best start with our Kitten & Puppy Growth Formula, 
        and support your senior pets with our specialized Senior Care Mix.
         Don't forget to promote dental health with our Natural Dental Chews. 
         Shop with confidence, knowing that every product is carefully chosen for your pet's 
         well-being and happiness.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;