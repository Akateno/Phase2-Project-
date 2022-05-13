import React, {useState} from "react";

function ZooAnimalCard({name, lifeSpan, habitat, diet, image, animal, updateAdopted}) {
    const [adopt, setAdopt]=useState(false)
    
    

    function handleAdoption() {
      setAdopt(!adopt)
      updateAdopted(animal) //removes adopted animal with DELETE, fetches another animal, and adds it to animal
    }

  return ( <div className="card">
  <img className="cardPic"src={image} alt={name} width="500" height="600"/>
  <h2>{name}</h2>
  <ul>
    <p><em><strong>LifeSpan :</strong> {lifeSpan} years</em> </p>
    <p><em><strong>Habitat:</strong> {habitat}</em></p>
    <p><em><strong>Diet:</strong> {diet}</em></p>
  </ul>

  {(adopt) ? (
    <button className="adopted"> Adopted!</button>
  ) : (
    <button onClick={handleAdoption} className="primary">Adopt</button>
  )}
</div>)
  
}

export default ZooAnimalCard;