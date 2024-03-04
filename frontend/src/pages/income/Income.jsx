import React, { useEffect, useState } from "react";
import { fetchIncome } from "../../actions/incomeActions";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../components/table/Table";
import Loader from "../../components/loader/Loader";
import Filter from "../../components/filter/Filter";
import { incomeCategory } from "../../utils";
import "./income.css";



const Income = () => {
  const dispatch = useDispatch();
  
  const [filters, setFilters] = useState({
    sort: "",
    category: "All",
  });


  const {income, loading} = useSelector((state)=> state.income);


  let filteredIncome = income;

  if (filters.category === "All") {
    filteredIncome = income;
  } else {
    filteredIncome = filteredIncome.filter(
      (income) => income.category === filters.category
    );
  }

  const totalIncome = filteredIncome.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  return (
    <div className="income-section content">
      <h2 className="heading-title">Income</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="income-container">
          <Filter
            filters={filters}
            setFilters={setFilters}
            filterdData={filteredIncome}
          >
            <option value="All">All</option>
            {incomeCategory?.map((category, index) => (
              <option value={category} key={index}>{category}</option>
            ))}
          </Filter>
          <Table data={filteredIncome} />
          <h3>Summary</h3>
          <div className="summary">
            Total Income <strong>{totalIncome}</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Income;
