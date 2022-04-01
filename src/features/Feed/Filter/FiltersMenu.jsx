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
  const vegOnlyMeals = useSelector((state) => state.meals.vegOnlyMeals);
  const prevType = useSelector((state) => state.meals.type);
  const isSorted = useSelector((state) => state.meals.isSorted);
  const isVeg = useSelector((state) => state.meals.isVeg);
  const unsortedSelectedMeals = useSelector(
    (state) => state.meals.unsortedSelectedMeals
  );
  const dispatch = useDispatch();

  const toggleVeg = (e) => {
    e.target.classList.toggle(style.vegActive);
    const saveFilterAction = saveFilters({
      selectedMeals: isVeg ? unsortedSelectedMeals : vegOnlyMeals,
      isVeg: !isVeg,
      type: prevType === "Veg" ? "" : "Veg",
    });
    dispatch(saveFilterAction);
  };
  const togglePrice = (e) => {
    let newMeals = [];
    let i = 0;
    for (let el of selectedMeals) {
      let arr = el[Object.keys(el)[0]];
      arr = arr.slice().sort((a, b) => a.price - b.price);
      newMeals[i++] = { [Object.keys(el)[0]]: arr };
    }
    const saveFilterAction = saveFilters({
      selectedMeals: isSorted ? unsortedSelectedMeals : newMeals,
      isSorted: !isSorted,
      type: prevType,
    });
    dispatch(saveFilterAction);

    if (e.target.tagName === "DIV") {
      e.target.classList.toggle(style.priceActive);
      e.target.children[0].children[0].classList.toggle(style.priceIconActive);
    }
  };
  return (
    <>
      {" "}
      <div className={style.filterContainer}>
        <span className={style.categoryWord}>CATEGORIES</span>
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
