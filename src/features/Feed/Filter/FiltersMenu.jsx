import React, { useState } from "react";
import cx from "classnames";
import style from "./filter.module.css";

import { HiSortDescending } from "react-icons/hi";
import { BiFilterAlt } from "react-icons/bi";
import FilterModal from "./FilterModal";
import { saveFilters } from "../feed.slice";
import { useDispatch, useSelector } from "react-redux";

const FiltersMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const selectedMeals = useSelector((state) => state.meals.selectedMeals);
  const unsortedSelectedMeals = useSelector(
    (state) => state.meals.unsortedSelectedMeals
  );
  const [type, setType] = useState(false);
  const [sort, setSort] = useState(false);
  const dispatch = useDispatch();

  const toggleVeg = (e) => {
    e.target.classList.toggle(style.vegActive);
    setType((prev) => {
      const saveFilterAction = saveFilters({
        type: !prev ? "Veg" : "",
      });
      dispatch(saveFilterAction);
      return !prev;
    });
  };
  const togglePrice = (e) => {
    setSort((prev) => {
      let newMeals = [];
      let i = 0;
      for (let el of selectedMeals) {
        let arr = el[Object.keys(el)[0]];
        arr = arr.slice().sort((a, b) => a.price - b.price);
        newMeals[i++] = { [Object.keys(el)[0]]: arr };
      }
      const saveFilterAction = saveFilters({
        selectedMeals: !prev ? newMeals : unsortedSelectedMeals,
      });
      dispatch(saveFilterAction);
      return !prev;
    });

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
            {showModal ? <FilterModal setShowModal={setShowModal} /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersMenu;
