import React from 'react'
import "./category.css";
export default function Categories() {
  return (
    <div className='menu-container'>
        <div className='filter-bar'>
            <div>CATEGORIES</div>
            <div className='filterContainer'>
                <div>VEG</div>
                <div>PRICE</div>
                <div>FILTERS</div>
            </div>
        </div>
          <div className="fm-category-vertical ng-scope" style={{top: "127px"}}>
              <div className="overflow-hidden">
                  <span className="ng-binding">Rice Bowls</span>
                  <span className="ng-binding">Noodle Bowls</span>
                  <span className="ng-binding">Pastas & Steaks</span>
                  <span className="ng-binding">Biriyanis & Thalis</span>
                  <span className="ng-binding">Keto Specials</span>
                  <span className="ng-binding">Fit N Fab</span>
                  <span className="ng-binding">Sandwiches</span>
                  <span className="ng-binding">Accompaniments</span>
                  <span className="ng-binding">Burgers & Wraps</span>
                  <span className="ng-binding">Sides & Beverages</span>
                  <span className="ng-binding">Fresh Desserts</span>
              </div>
              </div>
              </div>

        )}
