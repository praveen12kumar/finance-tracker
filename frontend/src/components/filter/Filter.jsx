import React from "react";
import "./filter.css";

const Filter = ({children, filters, setFilters, filterdData }) => {

  if(filters.sort === "LTH"){
    filterdData = filterdData.sort((a, b)=> a.amount - b.amount);
  }
  else if(filters.sort === "HTL"){
    filterdData = filterdData.sort((a, b)=> b.amount - a.amount);
  }



  return (
    <div className="filter-section">
      <div className="filters">
      <span className="filter-sort">Sort by Amount: </span>
        <div className="filter-group">
        <input type="radio" name="amount" value="LTH" onChange={(e)=> setFilters({...filters, sort:e.target.value})}  />
          <label>Low to High
          </label>
        </div>
        <div className="filter-group">
        <input type="radio" name="amount" value="HTL" onChange={(e)=> setFilters({...filters, sort:e.target.value})} />
          <label> High to Low 
          </label>
        </div>
      </div>
      <div className="filter-group">
        <span>Filter by Category</span>
        <select name="" value={filters.category} onChange={(e)=> setFilters({...filters, category:e.target.value})}>
          {children}
        </select>
      </div>
    </div>
  );
};

export default Filter;
