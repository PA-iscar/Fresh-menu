import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { GrHome } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsDoorOpen } from "react-icons/bs";

import styles from "./Checkout.module.css";

import MapContainer from "./MapContainer";

export const Checkout = () => {
  return (
    <>
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
                <p className={styles.mailColor}>name@gmail.com</p>
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
                  {/* <MapContainer></MapContainer> */}
                  <div className="map">
                    <iframe title="t1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82774.69671830302!2d24.077286625210185!3d56.96328499537209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1549536732147"></iframe>
                  </div>
                </div>
                <p className={styles.mailColor}>Address comes here</p>
                <p>
                  <input
                    className={styles.inputTextbox}
                    type="text"
                    placeholder="Enter address"
                  />
                </p>
                <p>
                  <input
                    className={styles.inputTextbox}
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                </p>
                <p className={styles.mailColor}>Address Label</p>
                <div className={styles.buttonContainer}>
                  <button className={styles.addressBtns}>
                    <span>
                      <GrHome />
                    </span>
                    &nbsp;Home
                  </button>
                  <button className={styles.addressBtns}>
                    <span>
                      <HiOutlineOfficeBuilding />
                    </span>
                    &nbsp;Office
                  </button>
                  <button className={styles.addressBtns}>
                    <span>
                      <BsDoorOpen />
                    </span>
                    &nbsp;Others
                  </button>
                </div>
                <p>
                  <button className={styles.savebtn}>SAVE AND CONTINUE</button>
                </p>
              </div>
              <div className={styles.rightOne}>
                <h3 className={styles.orange}>Change</h3>{" "}
              </div>
            </div>
            <div className={styles.leftMainOne}>
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
                <p className={styles.mailColor}>Get assured Rs 150 cashback</p>
                <p className={styles.orange}>Avail Offer</p>
              </div>
            </div>
          </div>
          <div className={styles.rightMain}>
            <div className={styles.rightFirst}>
              <h2>Delivery Time</h2>
              <p>Deliver Now</p>
              <p className={styles.mailColor}>
                Your order will be delivered within{" "}
                <strong style={{ color: "black" }}>45 minutes</strong>
              </p>
              <p className={styles.orange}>Schedule for later</p>
            </div>

            <div className={styles.rightFirst}>
              <h2>You might also Like</h2>
              <p>Deliver Now</p>
              <p className={styles.mailColor}>
                Your order will be delivered within{" "}
                <strong style={{ color: "black" }}>45 minutes</strong>
              </p>
            </div>
            <div className={styles.rightFirst}>
              <h2>Need Help?</h2>
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
