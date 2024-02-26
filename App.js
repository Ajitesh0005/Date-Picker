import {React,useState} from "react";



  const DatePicker = ({onDateSelect}) => {
    const [sDate, setSDate] = useState();
    
    const handleDateChange = (e) => {
      setSDate(e.target.value);
      onDateSelect(e.target.value);
    }


  return (
    <div>
    <input type="date" value={sDate} onChange={handleDateChange}></input>
    </div>
  );
  }
  
const FilterComponent = () => {
  const [filterDate, setFilterDate] = useState();

  const handleFilter = (date) => {
    setFilterDate(date);
    
  }

  return(
    <div>
      <h3>Date Picker</h3>
      <DatePicker onDateSelect={handleFilter}></DatePicker>
      <p>Selected Date: {filterDate}</p>
    </div>
  )
}

export default FilterComponent;

