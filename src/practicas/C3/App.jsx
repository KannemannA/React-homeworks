import "../../App.css";
import isOdd from "is-odd";

function App() {
  return (
    <div>
      <p>es 2 un numero par? {isOdd(2) ? 'Es impar' : 'Es par'}</p>
      <p>es 3 un numero par? {isOdd(3) ? 'Es impar' : 'Es par'}</p>
    </div>
  )
}

export default App;
