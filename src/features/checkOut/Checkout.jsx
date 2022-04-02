import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { GrHome, GrPaypal } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsDoorOpen, BsCreditCard } from "react-icons/bs";
import { RiRadioButtonLine } from "react-icons/ri";
import styles from "./Checkout.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "./VerticalTabs.css";
import { BsCash } from "react-icons/bs";
import {
  SiPhonepe,
  SiSamsungpay,
  SiPaytm,
  SiSwiggy,
  SiFoodpanda,
} from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { FaCcAmazonPay } from "react-icons/fa";
import NavBar from "../FoodItem/Navbar/NavBar";
import { loadLocalData } from "../LocalStorage/localStorage";

export const Checkout = () => {
  const totalAmount = loadLocalData("total");
  const meals = loadLocalData("meals");
  const [check, setCheck] = useState(false);
  function handleSubmit() {
    alert("Payment Successful...!");
  }
  return (
    <>
      <NavBar />
      <div className={styles.checkoutContainer}>
        <div className={styles.cardParent}>
          <div className={styles.leftMain}>
            <div className={styles.leftMainOne}>
              <div className={styles.leftOne}>
                {" "}
                <h2 className={styles.gray}>
                  <span>
                    <AiOutlineUser />
                  </span>{" "}
                  Logged In As
                </h2>
                <p className={styles.mailColor}>abhiaro27@gmail.com</p>
              </div>
              <div className={styles.rightOne}>
                <h3 className={styles.orange}>Details</h3>{" "}
              </div>
            </div>
            <div className={styles.leftMainOne}>
              <div className={styles.leftOne}>
                {" "}
                <h2 className={styles.gray}>
                  <span>
                    <FiMapPin />
                  </span>{" "}
                  Delivery Address
                </h2>
                <h4 className={styles.gray}>Home</h4>
                <div className={styles.mapContainer}>
                  <iframe
                    className={styles.mapFrame}
                    title="Google_Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.872847644795!2d77.72488921526994!3d12.979983518205191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f3ee538563%3A0xfb4d6517457c7958!2sNew%20Udupi%20Delicacy%20Veg!5e0!3m2!1sen!2sin!4v1648650226494!5m2!1sen!2sin"
                  ></iframe>
                </div>
                {/* <p className={styles.mailColor}>Address comes here</p> */}
                <form>
                  <p>
                    <input
                      className={styles.inputTextbox}
                      type="text"
                      placeholder="Enter address"
                      minlength="10"
                      required
                    />
                  </p>
                  <p>
                    <input
                      className={styles.inputTextbox}
                      type="number"
                      placeholder="Enter Mobile Number"
                      pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                      required
                    />
                  </p>
                  <p className={styles.mailColor}>Address Label</p>
                  <div className={styles.buttonContainer}>
                    <button
                      className={styles.addressBtns}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <span>
                        <GrHome />
                      </span>
                      &nbsp;Home
                    </button>
                    <button
                      className={styles.addressBtns}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <span>
                        <HiOutlineOfficeBuilding />
                      </span>
                      &nbsp;Office
                    </button>
                    <button
                      className={styles.addressBtns}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <span>
                        <BsDoorOpen />
                      </span>
                      &nbsp;Others
                    </button>
                  </div>
                  <p></p>
                  <p>
                    <button
                      className={styles.savebtn}
                      onClick={(e) => {
                        setCheck(true);
                        e.preventDefault();
                      }}
                    >
                      SAVE AND CONTINUE
                    </button>
                  </p>
                </form>
              </div>
              <div className={styles.rightOne}>
                <h3 className={styles.orange}>Change</h3>{" "}
              </div>
            </div>

            <div className={styles.showOrHide}>
              {check === true && (
                <div
                  className={styles.leftMainOne}
                  style={{ display: "block" }}
                >
                  <div className={styles.leftOne}>
                    {" "}
                    <h2 className={styles.gray}>
                      <span>
                        <IoWalletOutline />
                      </span>{" "}
                      Payment Method
                    </h2>
                    <h4 className={styles.gray}>Offers</h4>
                    <img
                      src="/Mobikwik.png"
                      alt="mobikwik"
                      height="30px"
                      width="45px"
                    />
                    <p>Mobikwik</p>
                    <p className={styles.mailColor}>
                      Get assured Rs 150 cashback
                    </p>
                    <p className={styles.orange}>Avail Offer</p>
                  </div>
                  <div className="">
                    <Tabs defaultTab="vertical-tab-one" vertical>
                      <TabList>
                        <Tab tabFor="vertical-tab-one">Cash</Tab>
                        <Tab tabFor="vertical-tab-two">PhonePe</Tab>
                        <Tab tabFor="vertical-tab-three">Wallets</Tab>
                        <Tab tabFor="vertical-tab-four">PayPal</Tab>
                        <Tab tabFor="vertical-tab-five">
                          Cards and Ticket Restaurant
                        </Tab>
                        <Tab tabFor="vertical-tab-six">Sodexo Meal Card</Tab>
                        <Tab tabFor="vertical-tab-seven">NetBanking</Tab>
                      </TabList>
                      <TabPanel tabId="vertical-tab-one">
                        <div>
                          <p>
                            <BsCash size={50} />
                          </p>
                        </div>
                        <div>
                          <h3>Cash</h3>
                        </div>
                        <div>
                          <p className={styles.mailColor}>
                            Pay with cash on deliver
                          </p>
                        </div>
                        <div>
                          <button
                            className={styles.savebtn}
                            onClick={() => handleSubmit()}
                          >
                            PLACE ORDER. ₹
                            {Math.ceil(
                              totalAmount +
                                totalAmount * 0.05 +
                                totalAmount * 0.025 +
                                totalAmount * 0.025
                            )}
                          </button>
                        </div>
                      </TabPanel>
                      <TabPanel tabId="vertical-tab-two">
                        <div>
                          <p>
                            <SiPhonepe size={50} />
                          </p>
                        </div>
                        <div>
                          <p>
                            <button
                              className={styles.savebtn}
                              onClick={() => handleSubmit()}
                            >
                              PLACE ORDER. ₹
                              {Math.ceil(
                                totalAmount +
                                  totalAmount * 0.05 +
                                  totalAmount * 0.025 +
                                  totalAmount * 0.025
                              )}
                            </button>
                          </p>
                        </div>
                      </TabPanel>
                      <TabPanel tabId="vertical-tab-three">
                        <p>
                          <div className={styles.walletDiv}>
                            <button className={styles.walletIndiv}>
                              <SiSamsungpay
                                style={{ color: "violet" }}
                                className={styles.vAlign}
                                size={40}
                              />
                            </button>
                            <button className={styles.walletIndiv}>
                              <SiPaytm
                                style={{ color: "blue" }}
                                className={styles.vAlign}
                                size={40}
                              />
                            </button>
                            <button className={styles.walletIndiv}>
                              <SiSwiggy
                                style={{ color: "orange" }}
                                className={styles.vAlign}
                                size={40}
                              />
                            </button>
                            <button className={styles.walletIndiv}>
                              <SiFoodpanda
                                style={{ color: "black" }}
                                className={styles.vAlign}
                                size={40}
                              />
                            </button>
                            <button className={styles.walletIndiv}>
                              <CgPaypal
                                style={{ color: "red" }}
                                className={styles.vAlign}
                                size={40}
                              />
                            </button>
                            <button
                              style={{ color: "gray" }}
                              className={styles.walletIndiv}
                            >
                              <FaCcAmazonPay
                                className={styles.vAlign}
                                size={40}
                              />
                            </button>
                          </div>
                          <div>
                            <p>
                              <button
                                className={styles.savebtn}
                                style={{ marginLeft: "15px" }}
                                onClick={() => handleSubmit()}
                              >
                                PLACE ORDER. ₹
                                {Math.ceil(
                                  totalAmount +
                                    totalAmount * 0.05 +
                                    totalAmount * 0.025 +
                                    totalAmount * 0.025
                                )}
                              </button>
                            </p>
                          </div>
                        </p>
                      </TabPanel>
                      <TabPanel tabId="vertical-tab-four">
                        <p>
                          <input type="radio" name="paypal" />
                          <GrPaypal size={20} />
                        </p>
                        <p className={styles.mailColor}>
                          Faster way to Pay (Credit Card users only)
                          <br />
                          Opt-in to skip OTP flow. (Valid on orders above 2000
                          via Credit Cards only) <br />
                          Your money, details and purchases are protected to
                          PayPal. <br />
                          Manage and cancel automatic payments anytime
                        </p>
                        <br />
                        <p>
                          <input type="radio" name="paypal" />
                          <GrPaypal size={20} />
                        </p>
                        <p className={styles.mailColor}>
                          PayPal regular checkout (Credit Card and Debit Card
                          users only)
                        </p>
                        <p>
                          <button
                            className={styles.savebtn}
                            onClick={() => handleSubmit()}
                          >
                            PLACE ORDER. ₹
                            {Math.ceil(
                              totalAmount +
                                totalAmount * 0.05 +
                                totalAmount * 0.025 +
                                totalAmount * 0.025
                            )}
                          </button>
                        </p>
                      </TabPanel>
                      <TabPanel tabId="vertical-tab-five">
                        <p>
                          <span>
                            <BsCreditCard size={50} />
                          </span>
                        </p>
                        <p>New Card Details</p>
                        <form>
                          <p>
                            <input
                              type="text"
                              placeholder="Card Number"
                              className={styles.formCard}
                              required
                            />
                            <input type="date" className={styles.formDate} />
                          </p>
                          <p>
                            <input
                              type="text"
                              placeholder="Full Name"
                              className={styles.formName}
                              required
                            />
                            <input
                              type="number"
                              placeholder="CVV"
                              className={styles.formCVV}
                              maxLength="3"
                              required
                            />
                          </p>
                          <p>
                            <input type="checkbox" />
                            &nbsp;Save card for quicker checkout
                          </p>
                          <p>
                            <button
                              className={styles.savebtn}
                              style={{ marginLeft: "15px" }}
                              onClick={() => handleSubmit()}
                            >
                              PLACE ORDER. ₹
                              {Math.ceil(
                                totalAmount +
                                  totalAmount * 0.05 +
                                  totalAmount * 0.025 +
                                  totalAmount * 0.025
                              )}
                            </button>
                          </p>
                        </form>
                      </TabPanel>
                      <TabPanel tabId="vertical-tab-six">
                        <p>
                          <span>
                            <BsCreditCard
                              size={50}
                              style={{ color: "orange" }}
                            />
                          </span>
                        </p>
                        <p>New Sodexo Card</p>
                        <p>
                          <button
                            className={styles.savebtn}
                            onClick={() => handleSubmit()}
                          >
                            PLACE ORDER
                          </button>
                        </p>
                      </TabPanel>
                      <TabPanel tabId="vertical-tab-seven">
                        <p></p>
                        <div className={styles.netBankingcontainer}>
                          <button className={styles.netBankingIndiv}>
                            <img
                              src="https://www.logotaglines.com/wp-content/uploads/2016/08/ICICI-Logo.png"
                              alt="ICICI"
                              className={styles.bankLogoIMG}
                            />
                            <p>
                              ICICI <br />
                              Bank
                            </p>
                          </button>
                          <button className={styles.netBankingIndiv}>
                            <img
                              src="https://www.vhv.rs/dpng/d/107-1073363_hdfc-bank-hd-png-download.png"
                              alt="HDFC"
                              className={styles.bankLogoIMG}
                            />
                            <p>
                              HDFC <br />
                              Bank
                            </p>
                          </button>
                          <button className={styles.netBankingIndiv}>
                            <img
                              src="https://w7.pngwing.com/pngs/509/329/png-transparent-axis-bank-connaught-place-new-delhi-security-business-bank-purple-angle-violet-thumbnail.png"
                              alt="AXIS"
                              className={styles.bankLogoIMG}
                            />
                            <p>
                              Axis <br />
                              Bank
                            </p>
                          </button>
                          <button className={styles.netBankingIndiv}>
                            <img
                              src="https://www.examsplanner.in/media/scholarship/kotak_shiksha_nidhi_scholarship.png"
                              alt="KOTAK"
                              className={styles.bankLogoIMG}
                            />
                            <p>
                              Kotak <br />
                              Bank
                            </p>
                          </button>
                        </div>
                        <p className={styles.mailColor}>Other Banks</p>
                        <p>
                          <select className={styles.formCard}>
                            <option>Bank Of India</option>
                            <option>SBI</option>
                            <option>Canara Bank</option>
                            <option>IndusInd Bank</option>
                            <option>Yes Bank</option>
                          </select>
                        </p>
                        <p>
                          <button
                            className={styles.savebtn}
                            onClick={() => handleSubmit()}
                          >
                            PLACE ORDER. ₹
                            {Math.ceil(
                              totalAmount +
                                totalAmount * 0.05 +
                                totalAmount * 0.025 +
                                totalAmount * 0.025
                            )}
                          </button>
                        </p>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.rightMain}>
            <div className={styles.rightFirst}>
              <h2 className={styles.gray}>Delivery Time</h2>
              <p>Deliver Now</p>
              <p className={styles.mailColor}>
                Your order will be delivered within{" "}
                <strong style={{ color: "black" }}>45 minutes</strong>
              </p>
              <p className={styles.orange}>Schedule for later</p>
            </div>

            <div className={styles.rightFirst}>
              <h2 className={styles.gray}>Your Order</h2>
              {/* <div>Put slider here</div> */}
              <hr />
              {meals.map((m) => {
                return (
                  <div className={styles.foodName}>
                    <p>
                      <span>
                        <RiRadioButtonLine style={{ color: "green" }} />
                      </span>{" "}
                      &nbsp; {m.name}
                    </p>
                    <div className={styles.number}>
                      <span className={styles.minus}>-</span>
                      <input
                        type="text"
                        value={m.count}
                        className={styles.cartInput}
                      />
                      <span className={styles.plus}>+</span>
                    </div>
                  </div>
                );
              })}

              <div className={styles.freshPass}>
                <div className={styles.leftPass}>
                  <p>FRESHPASS</p>
                  <p>Save upto 23% extra with each order</p>
                </div>
                <div className={styles.knowMore}>
                  <p>
                    <button className={styles.savebtn}>Know More</button>
                  </p>
                </div>
              </div>
              <p>
                <button className={styles.greenBtn}>
                  Safety Assured meals and contactless delivery
                </button>
              </p>
              <p>
                <button className={styles.whiteBtn}>
                  Check available coupons &nbsp;&nbsp;
                  <span>
                    <MdOutlineArrowForwardIos />
                  </span>
                </button>
              </p>
              <div className={styles.contactLess}>
                <input type="checkbox" />
                <label>Opt for ContactLess Delivery</label>
                <p className={styles.mailColor}>
                  Rider would leave your food parcel at a distance/drop off at
                  security gate.
                </p>
              </div>
              <div className={styles.itemPriceContainer}>
                <div className={styles.priceIndivOne}>
                  <p>Item Price</p>
                  <p className={styles.mailColor}>Packaging Fee</p>
                  <p>GST (5%)</p>
                  <p
                    className={styles.mailColor}
                    style={{ paddingLeft: "15px" }}
                  >
                    CGST (2.5%)
                  </p>
                  <p
                    className={styles.mailColor}
                    style={{ paddingLeft: "15px" }}
                  >
                    SGST (2.5%)
                  </p>
                </div>
                <div className={styles.priceIndivTwo}>
                  <p>₹{totalAmount}.00</p>
                  <p className={styles.mailColor}>+ ₹20.00</p>
                  <p>+ ₹{totalAmount * 0.05}</p>
                  <p className={styles.mailColor}>+ ₹{totalAmount * 0.025}</p>
                  <p className={styles.mailColor}>+ ₹{totalAmount * 0.025}</p>
                </div>
              </div>
              <hr />

              <div className={styles.itemPriceContainer}>
                <div className={styles.priceIndivOne}>
                  <h2 className={styles.gray} style={{ marginTop: "1px" }}>
                    Payable
                  </h2>
                </div>
                <div className={styles.priceIndivTwo}>
                  ₹
                  {Math.ceil(
                    totalAmount +
                      totalAmount * 0.05 +
                      totalAmount * 0.025 +
                      totalAmount * 0.025
                  )}
                </div>
              </div>
            </div>

            <div className={styles.rightFirst}>
              <h2 className={styles.gray}>Need Help?</h2>
              <p className={styles.greenColor}>080-8080-8080</p>
              <p className={styles.mailColor}>
                Lines open from 9:00 AM to 12:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
