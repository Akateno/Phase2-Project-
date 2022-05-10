import React from "react";

function ZooAnimalCard({name}) {
  return ( <li className="card">
  <img src="https://i.chzbgr.com/thumb800/8184033792/h76CA816A/happy-birthday-meme-with-a-cats-head-in-a-pizza-slice" alt="El Catto" />
  <h4>{name}</h4>
  {(true) ? (
    <button  className="primary"> Adopted</button>
  ) : (
    <button >Adopt</button>
  )}
</li>)
  
}

export default ZooAnimalCard;