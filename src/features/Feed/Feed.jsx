import React, { useEffect } from "react";
import style from "./feed.module.css";
import FiltersMenu from "./Filter/FiltersMenu";
import { useDispatch } from "react-redux";
import { getFiltersAPI, getMealsAPI } from "./feed.api";

const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getFiltersAction = getFiltersAPI();
    dispatch(getFiltersAction);
    const getMealsAction = getMealsAPI();
    dispatch(getMealsAction);
  }, [dispatch]);

  return (
    <>
      <div className={style.container}>
        <FiltersMenu />
        <hr className={style.divider} />
        <div className="feedContainer">
          <div className="categories"></div>
          <div className="feed"></div>
        </div>
      </div>
    </>
  );
};

export default Feed;
