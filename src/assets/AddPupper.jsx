import { useState } from "react"


const AddPupper = ({fetchAllPlayers}) => {

const [name, setName]= useState('')
const [breed, setBreed]= useState('')
const [imageUrl, setImage]= useState('')
const API_URL=`https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`

const submitPupper= async(event)=>{
event.preventDefault();
try {
  const response = await fetch (API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      breed,
      imageUrl,
    }),
  });
  const jsonObject = await response.json();
  console.log(`response`,jsonObject)
  console.log(`name`,name)
  fetchAllPlayers();

} catch (error) {
 console.log(error)
}


}




return (
    <>
      <form className="form" onSubmit={submitPupper}>
        <label>Name:</label>
        <input
          id="name" 
          type="text"
          onChange={(event)=>{
            setName(event.target.value)
          }}/>
         
        <label>Breed:</label>
        <input 
            id="breed"
            type="text"
            onChange={(event)=>{ 
              setBreed(event.target.value)}
           }
         />
        <label>Pupper Picture URL:</label>
        <input 
        id="imgUrl"
        type="text"
        onChange={(event)=>{ 
          setImage(event.target.value)}} />
        <br/>
        <button type="submit">Enter Pupper</button>
      </form>

    </>

  )

}

export default AddPupper