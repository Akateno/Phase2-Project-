import React from "react"

function ZooAnimalForm () {
    console.log("hello")
    return ( <div className="pageForm">
    <h2>New Animal</h2>
    <form >
      <input  type="text" name="name" placeholder="Animal name" />
      <input  type="text" name="image" placeholder="Image URL" />
      <input  type="text" name="details" placeholder="Details" />
      <button type="submit">Add Animal</button>
    </form>
  </div>)
}

export default ZooAnimalForm