import React, {useEffect, useState} from "react"

import Search from "./Search"
import ZooAnimalList from "./ZooAnimalList"

function ZooAnimalPage () {
    const [animal,setAnimal]=useState([])
    const [search, setSearch]=useState("")

     useEffect(()=>{
     fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then((r)=>r.json())
     .then((data)=>setAnimal(data))
   }, [])
   
   const displayedAnimals = animal.filter((anim)=>
anim.name.toLowerCase().includes(search.toLowerCase())
)

    return <div className="animalPage" >
      <h1 className="animalPageHeader" >Adoptable Animals</h1>
        <Search searchTerm={search} onChangeSearch={setSearch}/>
        <ZooAnimalList animals={displayedAnimals}/>
        
    </div>
}

export default ZooAnimalPage