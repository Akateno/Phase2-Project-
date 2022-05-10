import React, {useEffect, useState} from "react"

import Search from "./Search"
import ZooAnimalList from "./ZooAnimalList"

function ZooAnimalPage () {
    const [animal,setAnimal]=useState([])

     useEffect(()=>{
     fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((r)=>r.json())
     .then((data)=>setAnimal(data))
   }, [])
   


    return <div>
      <h1>This is the Zoo Animal Page</h1>
        <Search/>
        <ZooAnimalList animals={animal}/>
        
    </div>
}

export default ZooAnimalPage