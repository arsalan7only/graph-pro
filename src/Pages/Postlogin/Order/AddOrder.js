import { Button, TextField } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import { formToJSON } from "axios";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const AddOrder = () => {
//   const disablePastDate = () => {
//     const today = new Date();
//     const dd = String(today.getDate() + 1).padStart(2, "0");
//     const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//     const yyyy = today.getFullYear();
//     return yyyy + "-" + mm + "-" + dd;
// };

const currDate= new Date().toISOString().slice(0,10)

const handleDate=((e)=>{
  if (Date){
    return (currDate= e.target.value)
  }else{
    return(currDate)
  }

})
  return <div>
    {/* <input type="date" name="date"  min={disablePastDate()}/> */}
    <input type="date" onChange={handleDate} value={currDate?handleDate:currDate} />
    <TextField type="date" value={currDate} onChange={handleDate} />
    <TextField type="datetime-local" value={currDate} onChange={handleDate} />
  </div>;
}

export default AddOrder;
