import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./filterModal.module.css";

const FilterModal = () => {
  const types = useSelector((state) => state.filters.types);
  const cuisines = useSelector((state) => state.filters.cuisines);
  const trendings = useSelector((state) => state.filters.trendings);

  const [type, setType] = useState("");
  const [cuisine, setCuisine] = useState([]);
  const [trending, setTrending] = useState([]);

  const selectType = (e) => {
    for (let el of e.target.parentNode.children) {
      el.classList.remove(style.activeFilter);
    }
    if (type !== e.target.textContent) {
      setType(e.target.textContent);
      e.target.classList.add(style.activeFilter);
    } else {
      setType("");
      e.target.classList.remove(style.activeFilter);
    }
  };
  const selectCuisines = (e) => {
    setCuisine((prev) => {
      if (!prev.find((el) => el === e.target.textContent)) {
        return [...prev, e.target.textContent];
      } else {
        return prev.filter((el) => {
          return el !== e.target.textContent;
        });
      }
    });
    e.target.classList.toggle(style.activeFilter);
  };
  const selectTrendings = (e) => {
    setTrending((prev) => {
      if (!prev.find((el) => el === e.target.textContent)) {
        return [...prev, e.target.textContent];
      } else {
        return prev.filter((el) => {
          return el !== e.target.textContent;
        });
      }
    });
    e.target.classList.toggle(style.activeFilter);
  };
  const reset = (e) => {
    for (let el of e.target.parentNode.parentNode.children[1].children) {
      for (let rm of el.children[1].children) {
        rm.classList.remove(style.activeFilter);
      }
    }
    setType("");
    setCuisine([]);
    setTrending([]);
  };
  return (
    <>
      <div
        className={style.modal}
        onClick={function (e) {
          e.stopPropagation();
        }}
      >
        <div className={style.filterContainer}>
          <div className={style.heading}>
            <span>FILTERS</span>
            <span className={style.reset} onClick={reset}>
              Reset All Filters
            </span>
          </div>
          <div className={style.filters}>
            <div className={style.optionContainer}>
              <div className={style.heading}>Food Preference</div>
              <div className={style.options}>
                {types.map((el, i) => {
                  return (
                    <div className={style.option} onClick={selectType} key={i}>
                      {Object.keys(el)[0]}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={style.optionContainer}>
              <div className={style.heading}>Cuisine</div>
              <div className={style.options}>
                {cuisines.map((el, i) => {
                  return (
                    <div
                      className={style.option}
                      onClick={selectCuisines}
                      key={i}
                    >
                      {Object.keys(el)[0]}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={style.optionContainer}>
              <div className={style.heading}>Trending</div>
              <div className={style.options}>
                {trendings.map((el, i) => {
                  if (Object.keys(el)[0] === "null")
                    return <span key={i}></span>;
                  return (
                    <div
                      className={style.option}
                      onClick={selectTrendings}
                      key={i}
                    >
                      {Object.keys(el)[0]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button className={style.applyButton}>Apply</button>
      </div>
    </>
  );
};

export default FilterModal;
