import React from "react"
import ZooAnimalCard from "./ZooAnimalCard"

function ZooAnimalList ({animals, updateAdopted}) {
  
  return (
    <div className="cards">
        {
        animals.map((animal)=>(
          <ZooAnimalCard
          key={animal.id}
          name={animal.name}
          lifeSpan={animal.lifespan}
          habitat={animal.habitat}
          diet={animal.diet}
          image={animal.image}
          updateAdopted={updateAdopted}
          animal={animal}
          />
        ))}
    </div>)
}

export default ZooAnimalList