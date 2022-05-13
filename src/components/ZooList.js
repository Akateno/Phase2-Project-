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

    <div className="animalPage" key={animals.name}>
      
      <img className="cardPic"
      src={animals.image_link} alt={animals.name} width="500" height="600"/>
      <h2 className="card">{animals.name}</h2>
      <ul className="card">
      <p><em><strong>LifeSpan :</strong> {animals.lifespan} years</em></p>
    <p><em><strong>Habitat:</strong> {animals.habitat}</em></p>
    <p><em><strong>Diet:</strong> {animals.diet}</em></p>
      </ul>
    </div>
    ))
   

    return <div>
      <h1 className="animalPageHeader">Local Zoo Residents</h1>
      {rAnimals}
    </div>
}

export default Zoolist; 

