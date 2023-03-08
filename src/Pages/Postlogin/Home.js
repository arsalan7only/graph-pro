import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getparentcategory } from "../../Redux/Actions/customerAction";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getparentcategory());
  }, []);
  return(
   <div className="Parent-container">Home</div>
   );
};

export default Home;
