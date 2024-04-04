import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Competitors = ({ puppyList, API_URL, fetchAllPlayers, }) => {

  const [puppyPlayer, setPuppyPlayer] = useState({})
  const navigate = useNavigate();



  const handleEvent = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })

      console.log(`pupper`, `${API_URL}${id}`)
      const result = await response.json();
      console.log(`result`, result)
      fetchAllPlayers();

    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        puppyList.map((puppy) => {
          return (
            <div key={puppy.id} className='puppyCard'>
              <h2>{puppy.name}</h2>
              <h3>{puppy.breed} </h3>
              <img src={puppy.imageUrl} />
              <br />
              <button onClick={() => {
                navigate(`/details/${puppy.id}`)
              }}>Details:</button>
              <button onClick={() => handleEvent(puppy.id)}>Addopt Pup!</button>
            </div>)
        })
      }

    </>
  );


}



export default Competitors