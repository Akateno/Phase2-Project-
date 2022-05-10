import React, {useEffect, useState} from "react"

import Search from "./Search"
import ZooAnimalForm from "./ZooAnimalForm"
import ZooAnimalList from "./ZooAnimalList"

function ZooAnimalPage () {
    const [animal,setAnimal]=useState([])

     useEffect(()=>{
     fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((r)=>r.json())
     .then((data)=>setAnimal(data))
   }, [])
   
   function handleAddAnimal(newAnimal){
    setAnimal([...animal, newAnimal])
   }

    function handleAnimal (data) {
        setAnimal(data)
    }
    useEffect(()=>{
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then(resp=>resp.json())
        .then(data=>handleAnimal(data))
    }, [])
    
    return <div>
      <h1>This is the Zoo Animal Page</h1>
        <Search/>
        <ZooAnimalList  animals={animal}/>
        <ZooAnimalForm handleAddAnimal={handleAddAnimal}/>
        
    </div>
}

export default ZooAnimalPage