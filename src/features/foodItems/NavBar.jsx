import React from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import { Tooltip, Button } from 'antd';
import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from "@ant-design/icons";
import Icon, {
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingFilled,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Log In
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Sign Up
      </a>
    </Menu.Item>
    
  </Menu>
);

export default function NavBar({ visible, count }) {
  return (
    <div className={visible ? "navbar-visible-wrapper" : "navbar-wrapper"}>
      {console.log("v", visible)}
      <div
        className={
          visible ? "navbar-visible-inner-wrapper" : "navbar-inner-wrapper"
        }
      >
        <a href="/" target="_self" className="header-logo">
          <img
            src="https://www.freshmenu.com/images/header-logo.svg"
            alt="FreshMenu"
          />
        </a>
        <div>
          <div className="location-wrapper">
            <div className="location-inner-wrapper">
              <span className="lbl">Deliver to:</span>
              <span class="address-location">
                Koramangala, Bengaluru, Karnataka, India{" "}
              </span>
            </div>
            <span>
              {" "}
              <DownOutlined />
            </span>
          </div>
        </div>
        <div className={visible ? "right-visible-navbar" : "right-navbar"}>
          <a href="/fresh-club" className="fresh-club">
            <div className="fresh-new">NEW</div>
            <HeartFilled style={{ marginRight: "10px", color: "white" }} />
            <div className="try-fresh">Try FreshClub</div>
          </a>
          <a className="common-link">
          <Tooltip placement="bottom" title="Help Center">
          <SettingFilled />
      </Tooltip>
           
           
          </a>
          
          <a className="common-link">
          <Dropdown overlay={menu} arrow={{ pointAtRight: true }} placement="bottom">
            <UserOutlined />
            </Dropdown>
          </a>
        
         {count==0? <a className="common-link">
          <span class="cartCount">
                {count}
            </span>
           <ShoppingCartOutlined />
          </a>: <a className="common_cart_link">
          <span class="cartCount">
                {count}
            </span>
           <ShoppingCartOutlined />
          </a>}
         
        </div>
      </div>
    </div>
  );
}
