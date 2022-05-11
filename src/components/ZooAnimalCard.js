import React from "react";

function ZooAnimalCard({name, lifeSpan, habitat, diet, image}) {
  return ( <div className="card">
  <img className="animalImg" src={image} alt={name} 
  />
  <h2>{name}</h2>
    <li>LifeSpan: {lifeSpan}</li>
    <li>Habitat: {habitat}</li>
    <li>Diet: {diet}</li>



  {(true) ? (
    <button  className="primary">ADOPT</button>
  ) : (
    <button >Adopt</button>
  )}
</div>)
  
}

export default ZooAnimalCard;