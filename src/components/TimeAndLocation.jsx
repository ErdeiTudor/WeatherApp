import React from "react";
import { formatToLocalTime } from "../services/weatherService";
import { UilSearch, UilLocationPoint, UilStar } from "@iconscout/react-unicons";
import { useState } from "react";



function TimeAndLocation({ weather: { setQuery, dt, timezone, name, country } }) {

  const [isFavorite, setFavorites] = useState("");
  
  const handleFavoriteClick = (e) => {
     e = setFavorites(e.currentTarget.value);
  };
  
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
       
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
      <button className="bg-greenblack-100 p-2 rounded-3xl">
          <UilStar
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleFavoriteClick }
              />
      </button>
      </div>
    </div>
  );
}

export default TimeAndLocation;
