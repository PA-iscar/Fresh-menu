import React from "react";
import "./footer.css";
import Icon, {
  DownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingFilled,
  HeartOutlined,
  MailOutlined,
  HeartFilled,
  PhoneOutlined,
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled
} from "@ant-design/icons";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="company">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/faq" ng-click="fireFooterGAEvent('click', 'faq')">
                FAQ
              </a>
            </li>
            <li>
              <a href="/about" ng-click="fireFooterGAEvent('click', 'about')">
                About
              </a>
            </li>
            <li>
              <a
                href="/careers"
                ng-click="fireFooterGAEvent('click', 'careers')"
                class="GTM_careers_button"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                href="https://www.blog.freshmenu.com/"
                ng-click="fireFooterGAEvent('click', 'blog')"
                class="GTM_blog_button"
              >
                Blog
              </a>
            </li>
          </ul>
          <div class="terms-and-privacy">
            <a
              href="/terms-and-conditions"
              class="GTM_terms_and_conditions_button"
            >
              Terms
            </a>
            <a href="/privacy-policy" class="GTM_privacy_policy_button">
              Privacy
            </a>
          </div>
        </div>
        <div className="help">
          <h4>Help &amp; Contact</h4>
          <ul>
            <li class="toggle-modal-support">
              <a>
                <SettingFilled style={{ marginRight: "5px" }} />
                Help Center
              </a>
            </li>
            <li>
              <a target="_top">
                <MailOutlined style={{ marginRight: "5px" }} />
                Email Us
              </a>
            </li>
            <li>
              <a>
                <PhoneOutlined style={{ marginRight: "5px" }} />
                080-4042-4242
              </a>
            </li>
          </ul>
        </div>
        <div className="help_and_contact">
          <h4>more from us</h4>
          <ul>
            <li>
              <a href="/bulk-order">Bulk/Party Order</a>
            </li>
            <li>
              <a href="/cakes">Cake Order</a>
            </li>
            <li>
              <a href="/fresh-club">FreshClub</a>
            </li>
            <li>
              <a href="/offers">Offers</a>
            </li>
          </ul>
        </div>
        <div className="column_divider"></div>
        <div className="subscriber">
          <h3>Subscribe to our droolworthy newsletter</h3>
          <form className="input">
            <input
              type="text"
              id="fmSubscribeEmail"
              placeholder="Enter your email"
              name="EMAIL"
            />

            <button type="submit">Subscribe</button>
          </form>
          <div className="SubscribeErrorMsg">Please enter a valid email id</div>
          <div className="social">
            <a>
              <img
                height={40}
                src="https://www.freshmenu.com/pages/common/images/google-play.jpg"
              />
            </a>
            <a>
              <img
                height={40}
                src="https://www.freshmenu.com/pages/common/images/btn-app-store-normal-2.svg"
              />
            </a>
            <div class="divider"></div>
           
           <div className="facebook" >  <FacebookFilled style={{height:"19px",width:"19px"}}/></div>
             
           <div className="facebook" >  <TwitterOutlined style={{height:"19px",width:"19px"}}/></div>
           <div className="facebook" >  <InstagramFilled style={{height:"19px",width:"19px"}}/></div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
    <div>
    <nav>
             <h4>CATEGORIES</h4>
             
             <a href="/category/mains">Mains</a>
             
             <a href="/category/pizzas">Pizzas</a>
             
             <a href="/category/salads">Salads</a>
             
             <a href="/category/desserts">Desserts</a>
             
             <a href="/category/quickbites">Quickbites</a>
             
         </nav>
         <nav>
                <h4>CUISINES</h4>
                <span>
                
                    <a href="/cuisine/mexican-food">Mexican</a>
                    
                
                    <a href="/cuisine/thai-food">Thai</a>
                    
                
                    <a href="/cuisine/continental-food">Continental</a>
                    
                
                    <a href="/cuisine/mediterranean-food">Mediterranean</a>
                    
                </span>
                <span>
                    
                
                    <a href="/cuisine/indian-food">Indian</a>
                    
                
                    <a href="/cuisine/chinese-food">Chinese</a>
                    
                
                    <a href="/cuisine/italian-food">Italian</a>
                    
                
                    <a href="/cuisine/american-food">American</a>
                    
                
                </span>
            </nav>
    </div>
   </div>
    </div>
  );
}
