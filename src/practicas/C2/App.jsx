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
      <TituloH3 title="Loro" />
      <ChildrenLista>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ChildrenLista>
    </>
  )
}

export default App;
