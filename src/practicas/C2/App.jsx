import "../../App.css";
import movies from "../../../fakeApi/movies.json"

function App() {
  function likes (){
    console.log("like")
  }
  return (
    <>
      <h1>{movies[2].nombre}</h1>
      <p>{movies[2].genero + " descripcion corta..."}</p>
      <button onClick={likes}>LIKE</button>
    </>
  )
}

export default App;
