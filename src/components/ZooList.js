import React, {useEffect, useState} from "react"

import Search from "./Search"


function Zoolist () {
    const [animal,setAnimal]=useState([])
    
     useEffect(()=>{
     fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((r)=>r.json())
     .then((data)=>setAnimal(data))
   }, [])
   
   const rAnimals = animal.map((animals)=> (

    <div key={animals.name}>
      
      <img src={animals.image_link} alt={animals.name} width="500" height="600"/>
      <h2>{animals.name}</h2>
      <ul>
    <li>LifeSpan: {animals.lifespan}</li>
    <li>Habitat: {animals.habitat}</li>
    <li>Diet: {animals.diet}</li>
      </ul>
    </div>
    ))
   

    return <div>
      <h1 className="residentHeader">Local Zoo Residents</h1>
      {rAnimals}
    </div>
}

export default Zoolist; 