import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const uploadUrl = process.env.REACT_APP_UPLOAD_URL;
  const mainImgUrl = uploadUrl + item?.attributes?.image?.data?.attributes?.url;
  const secondImgUrl = uploadUrl + item?.attributes?.image2?.data?.attributes?.url;

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes?.isNew && <span>New Season</span>}
          {mainImgUrl && <img src={mainImgUrl} alt={item?.attributes?.title} className="mainImg" />}
          {secondImgUrl && <img src={secondImgUrl} alt={item?.attributes?.title} className="secondImg" />}
        </div>
        <h2>{item?.attributes?.title}</h2>
        <div className="prices">
          <h3>${item?.attributes?.oldPrice || item?.attributes?.price + 20}</h3>
          <h3>${item?.attributes?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
