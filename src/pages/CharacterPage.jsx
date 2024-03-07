import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CharacterPage (){
  const [data, setData] = useState("");
  


const charactersData = async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      const characterData = response.data
      setData(characterData)
      console.log(response.data.results)
    }
    
  useEffect(() => {
    charactersData()
},[])  

console.
    return (
      <>
      {data.map((c, i) => <li key={i}>{c.data}</li>)}
      </>
  );
  }
  
  export default CharacterPage;