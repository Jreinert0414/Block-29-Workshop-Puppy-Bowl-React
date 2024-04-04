import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import AllPlayers from './assets/GetPuppies.jsx'
import AddPupper from './assets/AddPupper.jsx'
import Details from './assets/PuppyDetails.jsx'
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players/`


function App() {

  const [puppyList, setPuppyList,] = useState([]);

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonObject = await response.json();
      setPuppyList(jsonObject.data.players)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    fetchAllPlayers();
  }, [])




  return (
    <>
      <div className='flex'>
        <h1>Puppy Pals Unite!</h1>
        <AddPupper API_URL={API_URL} fetchAllPlayers={fetchAllPlayers} />

      </div>
      <Routes>
        <Route
        path="/" element={
          <AllPlayers
          fetchAllPlayers={fetchAllPlayers}
          puppyList={puppyList}
          setPuppylist={setPuppyList} />

        }/>
        <Route path="/details/:puppyId" element={
          <Details API_URL={API_URL}/>} />


      </Routes>

    </>
  )
}

export default App
