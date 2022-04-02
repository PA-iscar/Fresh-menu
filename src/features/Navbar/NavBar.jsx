import React, { useState } from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Menu, Dropdown } from "antd";

import {
  DownOutlined,
  ShoppingCartOutlined,
  CrownOutlined,
  UserOutlined,
  SearchOutlined,
  SettingFilled,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import UserAuth from "../UserAuth/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAPI } from "../UserAuth/auth.api";
import { resetCheck } from "../UserAuth/check.slice";
import { loadLocalData } from "../LocalStorage/localStorage";

export default function NavBar() {
  const count = loadLocalData("cart")
  const [feature, setFeature] = useState("");
  const isLoggedin = useSelector((state) => state.login.isLoggedin);
  const dispatch = useDispatch();
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
    <>
      <UserAuth feature={feature} setFeature={setFeature} />
      <section className="navbar">
        <div className="navbar-wrapper">
          <div className="navbar-inner-wrapper">
            <Link to="/" className="header-logo">
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
            <div className="right-navbar">
              <Link to="" className="fresh-pass">
                <CrownOutlined
                  style={{ marginRight: "10px", color: "black" }}
                />
                <div>
                  <div>FreshPass </div>
                  <div className="coupun">Get extra 20% Off</div>
                </div>
              </Link>
              <Link to="" className="fresh-club">
                <div className="fresh-new">NEW</div>
                <HeartFilled style={{ marginRight: "10px", color: "white" }} />
                <div className="try-fresh">Try FreshClub</div>
              </Link>
              <Link className="download-app" to="">
                Download App
              </Link>
            </div>
          </div>
          <div style={{ border: "1px solid #e9e9e9" }}></div>
          <div>
            <div className="down-right-navbar">
              <div className="searchIcon">
                <Button
                  type="text"
                  shape="round"
                  icon={<SearchOutlined />}
                  size="large"
                >
                  Search
                </Button>
              </div>
              <div>
                <Button type="text" shape="round" size="large">
                  Offers
                </Button>
              </div>
              <Link className="common-link" to="">
                <SettingFilled />
              </Link>
              <Link className="common-link" to="">
                {/* <UserOutlined /> */}
                <Dropdown
                  overlay={isLoggedin ? menu2 : menu}
                  arrow={{ pointAtRight: true }}
                  placement="bottom"
                >
                  <UserOutlined />
                </Dropdown>
              </Link>
              {count === 0 ? (
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
      </section>
    </>
  );
}
