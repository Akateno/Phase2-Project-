import React, {useEffect, useState} from "react"
import Search from "./Search"
import ZooAnimalList from "./ZooAnimalList"
import ZooAnimalForm from "./ZooAnimalForm"

function ZooAnimalPage () {
  const [animal, setAnimal]=useState([])
  const [search, setSearch]=useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/animals")
    .then((r)=>r.json())
    .then((data)=>setAnimal(data))
  }, [])

  function handleAddAnimal(newAnimal){
    setAnimal([...animal, newAnimal])
  }

  function updateAdopted (adoptedAnimal) {
    fetch(`http://localhost:3000/animals/${adoptedAnimal.id}`, {
      method: "DELETE"
    })
    .then(resp=>resp.json())
    .then( () => {
      fetch("https://zoo-animal-api.herokuapp.com/animals/rand/")
      .then(resp=>resp.json())
      .then(newAnimal=>{
        newAnimal.image=(newAnimal.image_link)

        fetch("http://localhost:3000/animals/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newAnimal)
        })
        .then(resp=>resp.json())
        .then(newAdopted=> {
        console.log([...animal, newAdopted])
        setAnimal([...animal, newAdopted])
        })
      })
    })
  }

  const displayedAnimals = animal.filter(anim =>
    anim.name.toLowerCase().includes(search.toLowerCase())
  )

  return <div className="animalPage" >
    <h1 className="animalPageHeader" >Adoptable Animals</h1>
      <Search searchTerm={search} onChangeSearch={setSearch}/>
      <ZooAnimalForm handleAddAnimal={handleAddAnimal}/>
      <ZooAnimalList animals={displayedAnimals} updateAdopted={updateAdopted}/>
      
        
    </div>
}

export default ZooAnimalPage