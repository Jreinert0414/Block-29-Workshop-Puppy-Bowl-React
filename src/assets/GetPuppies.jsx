import { useEffect, } from "react"
import { Route, Routes } from "react-router-dom"
import Competitors from "./Competitors";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`

const AllPlayers = ({ fetchAllPlayers, puppyList, setPuppyList }) => {





  useEffect(() => {
    fetchAllPlayers();
  }, [])


  return (

    <>
      <h1>competitors: </h1><br/>
      <Competitors
        puppyList={puppyList}
        API_URL={API_URL}
        fetchAllPlayers={fetchAllPlayers} />
    </>

  )

};

export default AllPlayers