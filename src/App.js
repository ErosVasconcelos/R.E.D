import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import RED from "./components/redComponent";
import { FaBook } from 'react-icons/fa';

function App() {
  let [listaCatalagos, setlistaCatalagos] = useState([]);

  async function getDados() {
    await axios
      .get("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects")
      .then((resposta) => {
        setlistaCatalagos(resposta.data);
        console.log(resposta.data);
      });
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <>
      <h1 style={{
        width: "99%",
        padding: "5px",
        border: "4px solid #000",
        borderRadius: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"red",
      }}> R.E.D <FaBook/> </h1>

      <div
        style={{
          margin: "auto",
          display: "flex",
          width: "90%",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {listaCatalagos.map((red, key) => {
          return <RED red={red} key={key} />;
        })}
      </div>
    </>
  );
}

export default App;
