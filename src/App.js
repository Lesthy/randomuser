import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [titledata, setTitleData] = useState(null);
  const [namedata, setNameData] = useState(null);
  const [surnamedata, setSurnameData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((result) => {
        setTitleData(result.results[0].name.title);
        setNameData(result.results[0].name.first);
        setSurnameData(result.results[0].name.last);
      });
  }, []);

  return (
    <div className="App">
      {titledata} {""}
      {namedata} {""}
      {surnamedata} {""}
    </div>
  );
}
