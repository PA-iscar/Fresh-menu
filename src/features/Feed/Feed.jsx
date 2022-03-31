import React, { useEffect } from "react";
import style from "./feed.module.css";
import FiltersMenu from "./Filter/FiltersMenu";
import { useDispatch, useSelector } from "react-redux";
import { getFiltersAPI, getMealsAPI } from "./feed.api";
import FeedItem from "./FeedItem";

const Feed = () => {
  const selectedMeals = useSelector((state) => state.meals.selectedMeals);
  const isLoading = useSelector((state) => state.meals.isLoading);
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
        <div className={style.feedContainer}>
          <div className={style.categories}>
            {!isLoading ? (
              <div className={style.categoriesFixed}>
                {selectedMeals.map((el) => {
                  return (
                    <a
                      key={Object.keys(el)[0]}
                      href={`#${Object.keys(el)[0]}`}
                      className={style.navItems}
                    >
                      {Object.keys(el)[0].toUpperCase()}
                    </a>
                  );
                })}
              </div>
            ) : (
              <>{"...Loading"}</>
            )}
          </div>
          <div className={style.feed}>
            {!isLoading ? (
              <>
                {selectedMeals.map((el) => {
                  return (
                    <div
                      className={style.categoryContainer}
                      key={Object.keys(el)[0]}
                      id={Object.keys(el)[0]}
                    >
                      <div className={style.categoryHeading}>
                        {Object.keys(el)[0].toUpperCase()}
                      </div>
                      <div className={style.categoryItemContainer}>
                        {el[Object.keys(el)[0]].map((item) => {
                          return <FeedItem item={item} key={item._id} />;
                        })}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>{"...Loading"}</>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
