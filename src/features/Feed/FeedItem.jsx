import React from "react";
import style from "./feedItem.module.css";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const FeedItem = ({ item }) => {
  return (
    <div className={style.list}>
      <div className={style.item}>
        <div className={style.product}>
          <div className={style.new_header}>
            <div className={style.new_header_icon}>
              {item.category=="Vegetarian"? <GoPrimitiveDot
                style={{
                  border: "1px solid",
                  color: "green",
                  marginRight: "5px",
                }}
              />: <GoPrimitiveDot
              style={{
                border: "1px solid",
                color: "red",
                marginRight: "5px",
              }}
            />}
             
              <div>{item.cuisine}</div>
            </div>
          </div>
          <div className={style.product_body}>
            <Link to={`/${item._id}`}>
              <div className={style.image_container}>
                <img src={item.image} alt="" />
              </div>
            </Link>
            {item.trending !== null ? (
              <div className={style.offers_tag}>
                <div className={style.left_shape}></div>
                {item.trending}
              </div>
            ) : (
              <></>
            )}
            <h3>{item.name}</h3>
            <div className={style.product_body_actions}>
              <div className={style.product_body_actions_price}>
                <span className={style.price}>₹{item.price}</span>
              </div>
              <div className={style.cart}>ADD</div>
            </div>
            <div className={style.product_footer}>
              <div className={style.foot_cont}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
