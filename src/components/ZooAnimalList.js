import React from "react"
import ZooAnimalCard from "./ZooAnimalCard"

function ZooAnimalList ( animal ) {
    console.log(animal.animal.image_link)
    return <div>
        <ZooAnimalCard name={animal.animal.name} image={animal.animal.image_link} key={animal.animal.id}/>
    </div>
}

export default ZooAnimalList