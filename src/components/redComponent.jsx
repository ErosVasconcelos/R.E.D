import { FaLink } from 'react-icons/fa';
export default function RED({ red }) {
  return (
    <div
      style={{
        width: "30%",
        padding: "5px",
        border: "4px solid #000",
        borderRadius: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"red",
      }}
    >
      <img
        width="60%"
        src={`https://api.portalmec.c3sl.ufpr.br${red.thumbnail}`}
        style={{
          width: "65%",
          padding: "5px",
          border: "4px solid #000",
          borderRadius: "10px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"black",
        }}
      />
      <hr />
      <span style={{
        width: "30%",
        padding: "5px",
        border: "4px solid #000",
        borderRadius: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}>
        <b>Tags:</b>
        {red.tags.map((tag, key) => {
          return <p> {tag.name} </p>;
        })}
      </span>
      <span style={{
        width: "30%",
        padding: "5px",
        borderRadius: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <b>Categoria:</b> <nobr>{red.object_type}</nobr>
      </span>
      {red.link !== null && (
        <span>
          <b>Link:{" "}</b>
          <a href={red.link} target="_blank">
            <FaLink/> Acessar RED
          </a>
        </span>
      )}
      <hr />
      <p><b>Autor(es):</b> {red.author}</p>
      <hr />
      <span><b>Descrição:</b> {red.description}</span>
      <hr />
    </div>
  );
}
