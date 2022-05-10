import React from "react"
import ZooAnimalCard from "./ZooAnimalCard"

function ZooAnimalList ({brews}) {
    return (
    <div className="cards">
        {
        brews.map((brew)=>(
          <ZooAnimalCard
          key={brew.id}
          name={brew.name}
        //   image={brew.image}
          />
        ))}
    </div>)
}

export default ZooAnimalList