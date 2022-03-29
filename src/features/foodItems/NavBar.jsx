import React from "react";
import "./navbar.css";
import "antd/dist/antd.css";
// import { DownOutlined } from "@ant-design/icons";
import Icon, {
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingFilled,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-inner-wrapper">
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
        <div className="right-navbar">
          <a href="/fresh-club" className="fresh-club">
            <div className="fresh-new">NEW</div>
            <HeartFilled style={{ marginRight: "10px", color: "white" }} />
            <div className="try-fresh">Try FreshClub</div>
          </a>
          <a className="common-link">
            <SettingFilled />
          </a>
          <a className="common-link">
            <UserOutlined />
          </a>
          <a className="common-link">
            <ShoppingCartOutlined />
          </a>
        </div>
      </div>
    </div>
  );
}
