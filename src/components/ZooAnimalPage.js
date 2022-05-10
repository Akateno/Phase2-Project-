import React, { useState, useEffect} from "react"
import ZooAnimalForm from "./ZooAnimalForm"
import ZooAnimalList from "./ZooAnimalList"

function ZooAnimalPage () {
    const [animal, setAnimal] = useState({})

    function handleAnimal (data) {
        setAnimal(data)
    }
    useEffect(()=>{
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then(resp=>resp.json())
        .then(data=>handleAnimal(data))
    }, [])
    
    return <div>
        This is the ZooAnimalPage
        <ZooAnimalForm />
        <ZooAnimalList animal={animal}/>
    </div>
}

export default ZooAnimalPage