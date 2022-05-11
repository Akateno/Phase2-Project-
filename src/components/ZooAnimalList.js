import React from "react"
import ZooAnimalCard from "./ZooAnimalCard"

function ZooAnimalList ({animals }) {
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
          />
        ))}
    </div>)
}

export default ZooAnimalList