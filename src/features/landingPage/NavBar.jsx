import React from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import { Button} from 'antd';
import Icon, {
  DownOutlined,
  ShoppingCartOutlined,
  CrownOutlined,
  UserOutlined,
  SearchOutlined,
  SettingFilled,
  HeartFilled,
} from "@ant-design/icons";

export default function NavBar() {
  return (
    <section>
    <section className="navbar">
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
          <a href="/fresh-pass" className="fresh-pass">
            <CrownOutlined style={{ marginRight: "10px", color: "black" }} />
            <div>
              <div>FreshPass </div>
              <div className="coupun">Get extra 20% Off</div>
            </div>
          </a>
          <a href="/fresh-club" className="fresh-club">
            <div className="fresh-new">NEW</div>
            <HeartFilled style={{ marginRight: "10px", color: "white" }} />
            <div className="try-fresh">Try FreshClub</div>
          </a>
          <a className="download-app">
            Download App
          </a>
        </div>
      </div>
      <div style={{  border: "1px solid #e9e9e9"}}></div>
      <div>
      <div className="down-right-navbar">
          <div className="searchIcon">
          <Button type="text" shape="round" icon={<SearchOutlined />} size="large">
          Search
        </Button>
          </div>
          <div>
          <Button type="text" shape="round" size="large">Offers</Button>
          </div>
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
    </section>
    <section className="carousel">
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/2d0df88f-08fd-47ee-9299-42703cc42cd5.jpg" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/3d05d982-e3e0-4051-968f-aed93e9a6a4a.jpg" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/0dbf9d10-975d-4a2e-9521-6768ef740802.jpg" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/210a67bb-07c8-47f1-b17e-d0465244a405.png" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/e6b4ddc9-aa4c-4d82-9568-17f4150d70a6.jpg" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/207d2e5a-d747-4c9d-b338-1a96d4785724.jpeg" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/456e646b-281d-4c53-9c6b-c388976ed455.jpg" alt="" /></div>
      <div><img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/88c83a19-d81b-481b-8604-2304474c50b0.jpg" alt="" /></div>
      

    </section>
    </section>
  );
}
