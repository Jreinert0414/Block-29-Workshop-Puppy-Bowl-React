import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Details = ({ API_URL }) => {

  const [puppyDetails, setPuppyDetails] = useState({})


  const navigate = useNavigate();
  const { puppyId } = useParams();
  console.log(`get this from the puppy`, puppyId)

  const fetchPuppyDetails = async () => {
    try {
      const response = await fetch(`${API_URL}` + `${puppyId}`);
      console.log(API_URL)
      const result = await response.json();
      setPuppyDetails(result.data.player);
      console.log(result.data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPuppyDetails();
  }, []);



  return (
    <>
      <h1>Puppy details:</h1>
      <h2>{puppyDetails.name}</h2>
      <p>{puppyDetails.breed}</p>
      <p>{puppyDetails.status}</p>
      <img src={puppyDetails.imageUrl} />
      <br/>
      <button className="button" onClick={()=>{
        navigate("/");
      }}>Home        
      </button>

    </>



  );
};



export default Details