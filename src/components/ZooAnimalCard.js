import React from "react"

function ZooAnimalCard ( {name, image} ) {
    console.log(image)
    return <div>
        <img src={image}></img>
    </div>
}

export default ZooAnimalCard