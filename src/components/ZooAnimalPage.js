import React, {useEffect, useState} from "react"

import Search from "./Search"
import ZooAnimalList from "./ZooAnimalList"
import ZooAnimalForm from "./ZooAnimalForm"

function ZooAnimalPage () {
    const [animal,setAnimal]=useState([])
    const [search, setSearch]=useState("")

     useEffect(()=>{
     fetch("http://localhost:3000/animals")
    .then((r)=>r.json())
     .then((data)=>setAnimal(data))
   }, [])
   console.log(animal)
   
   function handleAddAnimal(newAnimal){
    setAnimal([...animal, newAnimal])
  }


   const displayedAnimals = animal.filter((anim)=>
    anim.name.toLowerCase().includes(search.toLowerCase())
)

    return <div className="animalPage" >
      <h1 className="animalPageHeader" >Adoptable Animals</h1>
        <Search searchTerm={search} onChangeSearch={setSearch}/>
        <ZooAnimalForm handleAddAnimal={handleAddAnimal}/>
        <ZooAnimalList animals={displayedAnimals}/>
      
        
    </div>
}

export default ZooAnimalPage