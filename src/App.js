import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [namedata, setNameData] = useState(null);
  const [surnamedata, setSurnameData] = useState(null);
  const [phonedata, setPhoneData] = useState(null);
  const [emaildata, setEmailData] = useState(null);
  const [picturedata, setPictreData] = useState(null);

  useEffect(() => {
    handleClick();
  }, []);
  
  function handleClick(){
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((result) => {
        setNameData(result.results[0].name.first);
        setSurnameData(result.results[0].name.last);
        setEmailData(result.results[0].email);
        setPhoneData(result.results[0].phone);
        setPictreData(result.results[0].picture.large);
      });
  }
  
  return (
    <div className="App">
      
      <img src={picturedata}/>
      
      <p>
      {namedata} {" "}
      {surnamedata} {" "}
      </p>
      
      <p>
      {phonedata} {" "}
      </p>
      
      <p>
      {emaildata} {" "}
      </p>

  <button onClick={handleClick}>get random</button>
    </div>
  );
  
}
