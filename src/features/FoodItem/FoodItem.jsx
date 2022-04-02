import React, { useEffect } from "react";
import NavBar from "./Navbar/NavBar";
import { useState } from "react";
import "./foodItem.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMealAPI } from "./foodItem.api";
import Cart from "../Cart/Cart";
import { GoPrimitiveDot } from "react-icons/go";
import Footer from "../Footer/Footer";
import { saveLocalData, loadLocalData } from "../LocalStorage/localStorage";
import Item from "antd/lib/list/Item";

export default function FoodItem() {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [foodArray, setFoodArray] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.meal.singleMeal);
  const meals = useSelector((state) => state.meal.meals);
  const isLoading = useSelector((state) => state.meal.isLoading);

  useEffect(() => {
    const getMealAction = getMealAPI({ id: location.pathname });
    dispatch(getMealAction);
  }, []);

  const showDrawer = (count) => {
    console.log("show");
    let arr = loadLocalData("meals");
    if (arr.filter((e) => e.name === meal.name).length > 0) {
      const newArray = arr.map((a) => {
        if (a._id == meal._id) {
          a.count = count;
          a.total = count * meal.price;
          return a;
        }
        return a;
      });
      saveLocalData("meals", newArray);
      console.log("new", newArray);
    } else {
      var obj = Object.assign(
        {},
        meal,
        { count: count },
        { total: count * meal.price }
      );
      arr.push(obj);
      saveLocalData("meals", arr);
      console.log("arr", arr);
    }

    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    if (count === 0) {
      setVisible(false);
    }
  }, [count]);
  return (
    <>
      <NavBar visible={visible} count={count} />
      {isLoading ? (
        "...Loading"
      ) : (
        <div className={visible ? "food" : ""}>
          <div className="product">
            <div className="image_social_container">
              <div className="image">
                <img src={meal.image} alt="" />
              </div>
            </div>
            <div className="info">
              <h1>{meal.name}</h1>
              <div className="tags">
                {/* <img
                    height={16}
                    width={16}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0_z0XU09IQKQ6w-T9_zCt08nYCrpm-gWOw&usqp=CAU"
                    alt=""
                  /> */}
                {meal.type === "Veg" ? (
                  <GoPrimitiveDot
                    style={{
                      border: "1px solid",
                      fontSize: "14px",
                      color: "limegreen",
                      marginRight: "5px",
                    }}
                  />
                ) : meal.type === "Non Veg" ? (
                  <GoPrimitiveDot
                    style={{
                      border: "1px solid",
                      fontSize: "14px",
                      color: "red",
                      marginRight: "5px",
                    }}
                  />
                ) : (
                  <GoPrimitiveDot
                    style={{
                      border: "1px solid",
                      fontSize: "14px",
                      color: "brown",
                      marginRight: "5px",
                    }}
                  />
                )}

                <span className="category">
                  <Link to="/" className="cuisine">
                    {meal.cuisine}
                  </Link>
                </span>
                {/* <span>Available</span> */}
              </div>
              <h2 className="price">
                <span>₹{meal.price}</span>
              </h2>
              {count == 0 ? (
                <div
                  className="order"
                  onClick={() => {
                    setCount(count + 1);
                    showDrawer(count + 1);
                  }}
                >
                  ADD
                </div>
              ) : (
                <div className="order">
                  <div
                    className="order_calc"
                    onClick={() => {
                      setCount(count - 1);
                      showDrawer(count - 1);
                    }}
                  >
                    -
                  </div>
                  <div className="order_result">{count}</div>
                  <div
                    className="order_calc"
                    onClick={() => {
                      setCount(count + 1);
                      showDrawer(count + 1);
                    }}
                  >
                    +
                  </div>
                </div>
              )}
              <div className="food_detail">
                <div className="food_detail">DETAILS ABOUT THIS MEAL</div>
                <div className="food_desc">
                  {meal.details}
                  {/* This sandwich is loaded with too much yumminess. Chicken tikka
                  well spiced, is placed on a bed of beetroot-veggie coleslaw
                  along with Cheese slice between toasted, tikka-mayo spread
                  focaccia bread loaf. Enjoy this afghani wonder sandwich to
                  make your day delightful! */}
                </div>
                <div className="food_tags">
                  <div className="cuisines">
                    {meal.type !== "Veg" ? (
                      <>
                        {" "}
                        <img src="https://www.freshmenu.com/pages/product/images/category_icons/icn-non-veg.svg" />
                        <div className="cuisines_text">Non Veg</div>
                      </>
                    ) : (
                      <>
                        {" "}
                        <img src="https://www.freshmenu.com/pages/product/images/category_icons/icn-veg.svg" />
                        <div className="cuisines_text">Veg</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="ingredients">
                <div className="ingredients-title">INGREDIENTS</div>
                <div className="ingredients-list">
                  <div>
                    {meal.ingredients && meal.ingredients.join(",")}
                    {/* Chicken, focaccia bread loaf, lettuce, onion, parsley,
                    mayonnaise, beetroot, tikka seasoning, garlic, green chilli,
                    red and white cabbage, green bell pepper, carrot, cheese
                    slice, hung curd, cheese */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="suggested">
            <h2>You might also like</h2>
            <div className="list">
              <div className="item">
                <div className="image">
                  <img src="https://d3gy1em549lxx2.cloudfront.net/36789304-0f70-4b88-9930-6462f9d8edea.JPG" />
                </div>
                <h4>
                  Black Pepper Honey Chicken Bowl
                  <div className="tags">
                    <span>
                      <img
                        height={16}
                        width={16}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0_z0XU09IQKQ6w-T9_zCt08nYCrpm-gWOw&usqp=CAU"
                      />
                      <span className="category">Non Veg</span>
                    </span>
                    <span className="place">Pan-Asian</span>
                  </div>
                </h4>
                <div className="actions">
                  <div style={{ flex: 1 }}>
                    <span>₹{meal.price}</span>
                  </div>
                  <button className="add">ADD</button>
                </div>
              </div>

              <div className="item">
                <div className="image">
                  <img src="https://d3gy1em549lxx2.cloudfront.net/ee4f3dd2-3712-4da9-9e64-7ff3c714b5b5.jpeg" />
                </div>
                <h4>
                  Black Pepper Honey Chicken Bowl
                  <div className="tags">
                    <span>
                      <img
                        height={16}
                        width={16}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0_z0XU09IQKQ6w-T9_zCt08nYCrpm-gWOw&usqp=CAU"
                      />
                      <span className="category">Non Veg</span>
                    </span>
                    <span className="place">Pan-Asian</span>
                  </div>
                </h4>
                <div className="actions">
                  <div style={{ flex: 1 }}>
                    <span>₹219</span>
                  </div>
                  <button className="add">ADD</button>
                </div>
              </div>

              <div className="item">
                <div className="image">
                  <img src="https://d3gy1em549lxx2.cloudfront.net/061b3479-097e-44ca-92f3-77723a968d81.jpg" />
                </div>
                <h4>
                  Black Pepper Honey Chicken Bowl
                  <div className="tags">
                    <span>
                      <img
                        height={16}
                        width={16}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0_z0XU09IQKQ6w-T9_zCt08nYCrpm-gWOw&usqp=CAU"
                      />
                      <span className="category">Non Veg</span>
                    </span>
                    <span className="place">Pan-Asian</span>
                  </div>
                </h4>
                <div className="actions">
                  <div style={{ flex: 1 }}>
                    <span>₹219</span>
                  </div>
                  <button className="add">ADD</button>
                </div>
              </div>

              <div className="item">
                <div className="image">
                  <img src="https://d3gy1em549lxx2.cloudfront.net/40aab801-5ae0-42fa-97a3-b768a529ddee.JPG" />
                </div>
                <h4>
                  Black Pepper Honey Chicken Bowl
                  <div className="tags">
                    <span>
                      <img
                        height={16}
                        width={16}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0_z0XU09IQKQ6w-T9_zCt08nYCrpm-gWOw&usqp=CAU"
                      />
                      <span className="category">Non Veg</span>
                    </span>
                    <span className="place">Pan-Asian</span>
                  </div>
                </h4>
                <div className="actions">
                  <div style={{ flex: 1 }}>
                    <span>₹219</span>
                  </div>
                  <button className="add">ADD</button>
                </div>
              </div>
            </div>
          </div>
          {count > 0 && visible === true && (
            <Cart visible={visible} setVisible={setVisible} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
}
