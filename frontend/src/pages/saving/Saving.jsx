import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaving } from '../../actions/savingActions';
import Loader from '../../components/loader/Loader';
import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';
import { savingCategory } from '../../utils';
import "./saving.css"


const Saving = () => {
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        sort:"",
        category:"All"
    });

    const {saving, loading} = useSelector(state => state.saving);

    let filteredSaving = saving;

    if(filters.category === "All") {
        filteredSaving = saving;
    }
    else{
        filteredSaving = saving.filter((item)=> item.category === filters.category);
    }

    const totalSaving = filteredSaving.reduce((acc, curr) =>acc + curr.amount, 0);

    useEffect(()=>{
        dispatch(fetchSaving())
    },[dispatch])


  return (
    <div className='saving-section content'>
      <h2 className="heading-title">Savings</h2>
      {
        loading ? (<Loader/>) :
         (
            <div className="saving-container">
                <Filter filters={filters} setFilters={setFilters} filterdData={filteredSaving}>
                    <option value="All">All</option>
                    {
                        savingCategory.map((item, i)=>(
                            <option value={item} key={i}>{item}</option>
                        ))
                    }
                </Filter>
                <Table data={filteredSaving}/>
                <h3>Summary</h3>
                <div className="summary">
                    Total expense: <strong>{totalSaving}</strong>
                </div>
            </div>
         )
      }
    </div>
  )
}

export default Saving
