import React, { useState } from "react";
import cx from "classnames";
import style from "./filter.module.css";

import { HiSortDescending } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import FilterModal from "./FilterModal";


const FiltersMenu = () => {
  const [showModal, setShowModal] = useState(false);
  

  const toggleVeg = (e) => {
    e.target.classList.toggle(style.vegActive);
  };
  const togglePrice = (e) => {
    if (e.target.tagName === "DIV") {
      e.target.classList.toggle(style.priceActive);
      e.target.children[0].children[0].classList.toggle(style.priceIconActive);
    }
  };
  return (
    <>
      {" "}
      <div className={style.filterContainer}>
        <span>CATEGORIES</span>
        <div className={style.filters}>
          <div className={cx(style.filter, style.button)} onClick={toggleVeg}>
            VEG
          </div>
          <div className={cx(style.filter, style.button)} onClick={togglePrice}>
            PRICE{" "}
            <i className={style.priceFilterIcon}>
              <HiSortDescending />
            </i>
          </div>
          <div
            className={cx(style.filter, style.modalOpener)}
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
          >
            <i className={style.filterIcon}>
              <BiFilterAlt />
            </i>{" "}
            FILTERS
            {showModal ? <FilterModal /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersMenu;
