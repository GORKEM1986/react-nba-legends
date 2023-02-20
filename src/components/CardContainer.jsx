import React, { useState } from "react";
import { usestate } from "react";
import data from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  console.log(data);
  const [searchCard, setSearchCard] = useState("");

  return (
    <div className="search" >
      <input 
      onChange={(e) => setSearchCard(e.target.value)}
      className="search_card"
      type="text" 
      placeholder="Search Player" />


      <div className="container">
        {data.filter((player)=> {
          return player.name.toLocaleUpperCase().includes(searchCard.toLocaleUpperCase());
        })
        .map((item, index)=>{
          return <PlayerCard item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
