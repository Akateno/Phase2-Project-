import React, {useState} from "react";

function ZooAnimalCard({name, lifeSpan, habitat, diet, image}) {
    const [adopt, setAdopt]=useState(false)

    function handleAdoption(){setAdopt((adopt)=> !adopt)}

  return ( <div className="card">
  <img className="cardPic"src={image} alt={name} width="500" height="600"/>
  <h2>{name}</h2>
  <ul>
    <p><em><strong>LifeSpan :</strong> {lifeSpan}</em> </p>
    <p><em><strong>Habitat:</strong> {habitat}</em></p>
    <p><em><strong>Diet:</strong> {diet}</em></p>
  </ul>

  {(adopt) ? (
    <button  onClick={handleAdoption} className="adopted"> Adopted!</button>
  ) : (
    <button onClick={handleAdoption} className="primary">Adopt</button>
  )}
</div>)
  
}

export default ZooAnimalCard;