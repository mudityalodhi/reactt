import React, { useEffect, useState } from "react";

const Meal = () => {

    const [apiData, setApiData] = useState([])

  useEffect(() => {
    const fetchDatafromAPI = async () => {
      const API = await fetch(
        "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
      );
      const data = await API.json(

      )
    };
  }, []);

  return <div className=""></div>;
};

export default Meal;
