import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./filterModal.module.css";
import cx from "classnames";
import { saveFilters } from "../feed.slice";

const FilterModal = ({ setShowModal }) => {
  const meals = useSelector((state) => state.meals.allMeals);
  const types = useSelector((state) => state.filters.types);
  const cuisines = useSelector((state) => state.filters.cuisines);
  const trendings = useSelector((state) => state.filters.trendings);

  // const selectedMeals = useSelector((state) => state.meals.selectedMeals);
  const appliedType = useSelector((state) => state.meals.type);
  const appliedCuisines = useSelector((state) => state.meals.cuisines);
  const appliedTrendings = useSelector((state) => state.meals.trendings);
  const [type, setType] = useState(appliedType || "");
  const [cuisine, setCuisine] = useState(appliedCuisines || []);
  const [trending, setTrending] = useState(appliedTrendings || []);
  const [filteredMeals, setFilteredMeals] = useState(meals);

  const dispatch = useDispatch();

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

  const applyFilters = () => {
    const saveFilterAction = saveFilters({
      selectedMeals: filteredMeals,
      type,
      cuisine,
      trending,
    });
    dispatch(saveFilterAction);
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    let filter1;
    let filter2;
    let filter3;
    filter1 = meals.filter((el) => {
      return el.type === type;
    });
    if (type === "") {
      filter1 = meals;
    }
    filter2 = filter1.filter((el) => {
      for (let key of cuisine) {
        if (el.cuisine === key) {
          return el;
        }
      }
    });
    if (cuisine.length === 0) {
      filter2 = filter1;
    }
    filter3 = filter2.filter((el) => {
      for (let key of trending) {
        if (el.trending === key) {
          return el;
        }
      }
    });
    if (trending.length === 0) {
      filter3 = filter2;
    }

    setFilteredMeals(filter3);
  }, [meals, type, cuisine, trending]);

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
                    <div
                      className={cx(
                        style.option,
                        appliedType === Object.keys(el)[0]
                          ? style.activeFilter
                          : ""
                      )}
                      onClick={selectType}
                      key={i}
                    >
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
                      className={cx(
                        style.option,
                        appliedCuisines.filter((e) => {
                          return e === Object.keys(el)[0];
                        }).length > 0
                          ? style.activeFilter
                          : ""
                      )}
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
                      className={cx(
                        style.option,
                        appliedTrendings.filter((e) => {
                          return e === Object.keys(el)[0];
                        }).length > 0
                          ? style.activeFilter
                          : ""
                      )}
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
        <button
          className={cx(
            style.applyButton,
            filteredMeals.length === 0 ? style.disabledApplyButton : ""
          )}
          disabled={filteredMeals.length === 0}
          onClick={applyFilters}
        >
          Apply ({filteredMeals.length} Dishes)
        </button>
      </div>
    </>
  );
};

export default FilterModal;
