import React, {useEffect, useState} from "react"

import Search from "./Search"
import ZooAnimalList from "./ZooAnimalList"

function ZooAnimalPage () {
    const [brews,setBrews]=useState([])

     useEffect(()=>{
     fetch("https://api.openbrewerydb.org/breweries")
    .then((r)=>r.json())
     .then((data)=>setBrews(data))
   }, [])
   


    return <div>
      <h1>This is the Zoo Animal Page</h1>
        <ZooAnimalList brews={brews}/>
        <Search/>
    </div>
}

export default ZooAnimalPage