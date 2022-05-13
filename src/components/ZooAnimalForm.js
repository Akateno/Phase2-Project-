import React, {useState} from "react"

function ZooAnimalForm ({handleAddAnimal}) {
  const[name, setName]=useState("")
  const[image, setImage]=useState("")
  const[lifespan, setLifespan]=useState("")
  const[habitat, setHabitat]=useState("")
  const[diet, setDiet]=useState("")

  function handleName(event){
    setName(event.target.value)
  }
 function handleImage(event){
    setImage(event.target.value)
  }
  function handleLifespan(event){
    setLifespan(event.target.value)
  }
  function handleHabitat(event){
    setHabitat(event.target.value)
  }
  function handleDiet(event){
    setDiet(event.target.value)
  }

  const handleSubmit = (e)=> {
     e.preventDefault();
     fetch("http://localhost:3000/animals", {
       method: "POST", 
       headers: {
         "Content-Type": "application/json",
       },
       body:JSON.stringify({
         name,
         image,
         lifespan,
         habitat,
         diet,
      }),
     })
     .then(r=>r.json())
     .then((newAnimal)=>{
      handleAddAnimal(newAnimal);
     })
     setName("")
     setImage("")
     setLifespan("")
     setHabitat("")
     setDiet("")
     
    
   }

    return ( <div className="pageForm">
    <h3>New Animal</h3>
    <form onSubmit={handleSubmit}>
      <input  type="text" onChange={handleName} value={name} name="name" placeholder="Animal name" />
      <input  type="url" onChange={handleImage} value={image} name="image" placeholder="Image URL" />
      <input  type="text" onChange={handleLifespan} value={lifespan} name="lifespan" placeholder="LifeSpan" />
      <input  type="text" onChange={handleHabitat} value={habitat} name="habitat" placeholder="Habitat" />
      <input  type="text" onChange={handleDiet} value={diet} name="diet" placeholder="Diet" />
      <button type="submit">Add Animal</button>
    </form>
  
  </div>)
}

export default ZooAnimalForm