import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveLocalData,loadLocalData } from "../LocalStorage/localStorage";
import { useNavigate } from "react-router-dom";
import { getCartAPI } from "./cart.api";

const Cart = ({ visible, setVisible }) => {
  var cartItems=loadLocalData("cart");
  const totalAmount=loadLocalData("total")
  const [count, setCount] = useState(0);
  const [total,setTotal]=useState(0);
  const user = useSelector((state) => state.login.user);
  const [meals,setMeals]=useState([]);
  const cart = useSelector((state) =>
    user._id ? state.cart.meals : state.cart.localMeals
  );
  const onClose = () => {
    setVisible(false);
  };
  const navigate = useNavigate()

  useEffect(()=>{
    const mealData=loadLocalData("meals");
    var result = mealData.reduce(function(tot, arr) { 
      return tot + arr.total;
    },0);
    var items=mealData.reduce(function(tot, arr) { 
      return tot + arr.count;
    },0);
   saveLocalData("cart",items);
   cartItems=loadLocalData("cart");
   saveLocalData("total",result)
    setTotal(result);
    console.log("meals",mealData);
    setMeals(mealData)
  })

  return (
    <>
      {visible ? (
        <>
          <div className="side_menu">
            <div className="cart">
              <div className="header">
                <span className="header_cart">
                  Your Cart
                  <br></br>
                  {cartItems == 1 ? (
                    <span className="header_count">{cartItems} Item</span>
                  ) : (
                    <span className="header_count">{cartItems} Items</span>
                  )}
                </span>
                <span className="back" onClick={onClose}>
                  ×
                </span>
              </div>
            </div>
            
              {meals.map((m)=>{
                return <div className="items">
                  <div className="items_cart">
                <div className="category">
                  <div className="category-border">
                    <div className="category-dot"></div>
                  </div>
                  <div>
                    <span className="item_title">
                      {m.name}
                    </span>
                    <div className="actions">
                      <div className="actions_btn">
                        <div
                          className="action_first"
                          onClick={() => {
                            // setCount(count - 1);
                            // setNewPrice(originalPrice * (count - 1));
                          }}
                        >
                          -
                        </div>
                        <div className="action_second">{m.count}</div>
                        <div
                          className="action_third"
                          onClick={() => {
                            // setCount(count + 1);
                            // setNewPrice(originalPrice * (count + 1));
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <div className="action_item">
                      <div className="price_item">
                        <div className="value-item">
                          <span className="selling_price">₹{m.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              })}
              
            
            <div className="proceed">

              {/* <button className="proceed-btn">
                Place Order &nbsp; · &nbsp; ₹ {total} */}

              <button
                className="proceed-btn"
                onClick={() => {
                navigate("/checkout")
                }}
              >
                Place Order &nbsp; · &nbsp; ₹ {total}

              </button>
              <div className="safe_delivery">
                <div className="safe_meals">
                  Safety Assured meals and contactless delivery
                </div>
              </div>
            </div>
            <div className="add_ons">
              <div className="anything">You May Also Like</div>
              <div className="upsale">
                <div className="upsale_product">
                  <div className="image_preloaded">
                    <img
                      src="data:image/jpeg;base64,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"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="info">
                    <div className="product_title">
                      <div className="veg_icon">
                        <div className="veg_dot"></div>
                      </div>
                      <span className="title">Choco Orange Swiss Roll</span>
                    </div>
                    <div className="actions">
                      <div className="price">
                        <div className="price">₹59</div>
                      </div>
                      <button className="add_cart_btn">
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="upsale_product">
                  <div className="image_preloaded">
                    <img
                      src="https://d3gy1em549lxx2.cloudfront.net/47d581cf-8e33-46e7-942e-1f2f832b368b.JPG"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="info">
                    <div className="product_title">
                      <div className="veg_icon">
                        <div className="veg_dot"></div>
                      </div>
                      <span className="title">White Forest Pastry</span>
                    </div>
                    <div className="actions">
                      <div className="price">
                        <div className="price">₹69</div>
                      </div>
                      <button className="add_cart_btn">
                        <span>Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
