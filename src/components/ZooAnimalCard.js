import React from "react";

function ZooAnimalCard({name, lifeSpan, habitat, diet, image}) {
  return ( <li className="card">
  <img src={image} alt={name} width="500" height="600"/>
  <h2>{name}</h2>
  <ul>
    <li>LifeSpan: {lifeSpan}</li>
    <li>Habitat: {habitat}</li>
    <li>Diet: {diet}</li>
  </ul>




  {(true) ? (
    <button  className="primary"> Adopted</button>
  ) : (
    <button >Adopt</button>
  )}
</li>)
  
}

export default ZooAnimalCard;