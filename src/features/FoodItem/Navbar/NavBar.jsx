import React, { useEffect, useState } from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import { Tooltip, Button } from "antd";
import { Menu, Dropdown } from "antd";
import { loadLocalData } from "../../LocalStorage/localStorage";
// import { DownOutlined } from "@ant-design/icons";
import Icon, {
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingFilled,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import UserAuth from "../../UserAuth/UserAuth";
import { Link } from "react-router-dom";
import { logoutUserAPI } from "../../UserAuth/auth.api";
import { resetCheck } from "../../UserAuth/check.slice";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar({ visible }) {
  var count = loadLocalData("cart");
  const [feature, setFeature] = useState("");
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.login.isLoggedin);

  const menu = (
    <Menu>
      <Menu.Item
        key="login"
        onClick={() => {
          setFeature("login");
        }}
      >
        <span rel="noopener noreferrer">Log In</span>
      </Menu.Item>
      <Menu.Item
        key="signup"
        onClick={() => {
          setFeature("signup");
        }}
      >
        <span rel="noopener noreferrer">Sign Up</span>
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.ItemGroup title="YOUR ACCOUNT">
        <Menu.Item>
          <Link to="">Profile Details</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Address Book</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">
            FreshMoney&nbsp;&nbsp;
            <span style={{ color: "#287ee2" }}> ₹ 100 CASHBACK</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Gift Card</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Payment Methods</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Favourites</Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="GENERAL">
        <Menu.Item>
          <Link to="">Order History</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="">Corporate Ordering</Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            to=""
            onClick={() => {
              const logoutAction = logoutUserAPI();
              dispatch(logoutAction);
              const resetCheckAction = resetCheck();
              dispatch(resetCheckAction);
            }}
          >
            Logout
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div className={visible ? "navbar-visible-wrapper" : "navbar-wrapper"}>
      <UserAuth feature={feature} setFeature={setFeature} />
      {/* {console.log("v", visible)} */}
      <div
        className={
          visible ? "navbar-visible-inner-wrapper" : "navbar-inner-wrapper"
        }
      >
        <Link to="/" target="_self" className="header-logo">
          <img
            src="https://www.freshmenu.com/images/header-logo.svg"
            alt="FreshMenu"
          />
        </Link>
        <div>
          <div className="location-wrapper">
            <div className="location-inner-wrapper">
              <span className="lbl">Deliver to:</span>
              <span className="address-location">
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
            <Dropdown
              overlay={isLoggedin ? menu2 : menu}
              arrow={{ pointAtRight: true }}
              placement="bottom"
            >
              <UserOutlined />
            </Dropdown>
          </a>

          {count == 0 ? (
            <a className="common-link">
              <span className="cartCount"></span>
              <ShoppingCartOutlined />
            </a>
          ) : (
            <a className="common_cart_link">
              <span className="cartCount">{count}</span>
              <ShoppingCartOutlined />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
