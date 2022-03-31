import React from "react";
import styled from "styled-components";
import { GoPrimitiveDot } from "react-icons/go";
import "./feedItem.css";

const FeedItem = ({ item }) => {
  return (
   
     
     
          <div className="list">
            <div className="item">
              <div className="product">
                <div className="new_header">
                  <div className="new_header_icon">
                   <GoPrimitiveDot style={{border:"1px solid",color:"red",marginRight:"5px"}}/>
                   <div >{item.cuisine}</div>
                  </div>
                </div>
                <div className="product_body">
                  <a>
                    <div className="image_container">
                      <img src={item.image}/>
                    </div>
                  </a>
                  <div className="offers_tag">
                  <div class="left-shape"></div>
                  {item.trending}
                  </div>
                  <h3>{item.name}</h3>
                  <div className="product_body_actions">
                    <div className="product_body_actions_price">
                    <span className="price">₹{item.price}</span>
                    </div>
                    <div className="cart">
                      ADD
                    </div>
                   
                  </div>
                   <div className="product_footer">
                      <div className="foot_cont">
                        
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
    
   
  );
};

export default FeedItem;
