import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios"
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("API URL:", process.env.REACT_APP_API_URL);  // Log the API URL
      console.log("API Token:", process.env.REACT_APP_API_TOKEN);  // Log the API Token
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,  // Ensure there's a space after "Bearer"
          },
        });
        console.log("Data:", response.data);
        setData(response.data.data);  // Assuming the API returns the array directly
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)} */}
          {data.map((item)=>(
            <Card item={item} key={item.id}/>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
