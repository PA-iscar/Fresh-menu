import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import "./foodItem.css";

export default function FoodItem() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="product">
        <div className="image_social_container">
          <div className="image">
            <img src="https://d3gy1em549lxx2.cloudfront.net/31e0eae1-7593-4111-a4a5-7e2c118aad08.jpeg" />
          </div>
        </div>
        <div className="info">
          <h1>Afghani Chicken Tikka Focaccia</h1>
          <div className="tags">
            <span>
              <img
                height={16}
                width={16}
                src="https://img.icons8.com/color/344/non-vegetarian-food-symbol.png"
              />
            </span>
            <span className="category">
              <h1></h1>
              <a href="" className="cuisine">
                Continental
              </a>
            </span>
            {/* <span>Available</span> */}
          </div>
          <h2 className="price">
            <span>₹219</span>
          </h2>
          {count == 0 ? (
            <div
              className="order"
              onClick={() => {
                setCount(count + 1);
                showDrawer();
              }}
            >
              ADD
            </div>
          ) : (
            <div className="order">
              <div className="order_calc" onClick={() => setCount(count - 1)}>
                -
              </div>
              <div className="order_result">{count}</div>
              <div className="order_calc" onClick={() => setCount(count + 1)}>
                +
              </div>
            </div>
          )}
          <div className="food_detail">
            <div className="food_detail">DETAILS ABOUT THIS MEAL</div>
            <div className="food_desc">
              This sandwich is loaded with too much yumminess. Chicken tikka
              well spiced, is placed on a bed of beetroot-veggie coleslaw along
              with Cheese slice between toasted, tikka-mayo spread focaccia
              bread loaf. Enjoy this afghani wonder sandwich to make your day
              delightful!
            </div>
            <div className="food_tags">
              <div className="cuisines">
                <img src="https://www.freshmenu.com/pages/product/images/category_icons/icn-non-veg.svg" />
                <div class="cuisines_text">Non Veg</div>
              </div>
            </div>
          </div>
          <div className="ingredients">
            <div className="ingredients-title">INGREDIENTS</div>
            <div className="ingredients-list">
              <div>
                Chicken, focaccia bread loaf, lettuce, onion, parsley,
                mayonnaise, beetroot, tikka seasoning, garlic, green chilli, red
                and white cabbage, green bell pepper, carrot, cheese slice, hung
                curd, cheese
              </div>
            </div>
          </div>
        </div>
      </div>
      {count > 0 && visible == true && (
        <div className="side_menu">
          <div className="cart">
            <div className="header">
              <span className="header_cart">
                Your Cart
                <br></br>
                {count == 1 ? (
                  <span className="header_count">{count} Item</span>
                ) : (
                  <span className="header_count">{count} Items</span>
                )}
              </span>
              <span className="back" onClick={onClose}>
                ×
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
