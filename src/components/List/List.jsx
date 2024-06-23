import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Construct the base URL
  let url = `/products?populate=*`;

  // Add category filter
  if (catId) {
    url += `&filters[categories][id][$eq]=${catId}`;
  }

  // Add sub-categories filters
  if (subCats.length > 0) {
    const subCatFilters = subCats.map(
      (item) => `&filters[sub_categories][id][$eq]=${item}`
    ).join("");
    url += subCatFilters;
  }

  // Add price filter
  if (maxPrice) {
    url += `&filters[price][$lte]=${maxPrice}`;
  }

  // Add sorting
  if (sort) {
    url += `&sort=price:${sort}`;
  }

  const { data, loading, error } = useFetch(url);

  return (
    <div className="list">
      {loading ? (
        "Loading..."
      ) : error ? (
        "Error loading products"
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
