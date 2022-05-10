import React, {useState} from "react"

function ZooAnimalForm ({handleAddAnimal}) {
  const[name, setName]=useState("")
  const[image, setImage]=useState("")
  const[details, setDetails]=useState("")

  function handleName(event){
    setName(event.target.value)
  }
 function handleImage(event){
    setImage(event.target.value)
  }
  function handleDetails(event){
    setDetails(event.target.value)
  }
  //make local copy of data
  // fetch(`http://localhost:3000/toys`)
  //   .then(response => response.json())
  //   .then(data => {
  //       console.log(data);
  //   });

  const handleSubmit = (e)=> {
     e.preventDefault();
     fetch("http://localhost:3000/toys", {
       method: "POST", 
       headers: {
         "Content-Type": "application/json",
       },
       body:JSON.stringify({
         name,
         image,
         details,
      }),
     })
     .then(r=>r.json())
     .then((newAnimal)=>{
      handleAddAnimal(newAnimal);
     })
   }

    return ( <div className="pageForm">
    <h2>New Animal</h2>
    <form onSubmit={handleSubmit}>
      <input  type="text" onChange={handleName} value={name} name="name" placeholder="Animal name" />
      <input  type="text" onChange={handleImage} value={image} name="image" placeholder="Image URL" />
      <input  type="text" onChange={handleDetails} value={details} name="details" placeholder="Details" />
      <button type="submit">Add Animal</button>
    </form>
  </div>)
}

export default ZooAnimalForm