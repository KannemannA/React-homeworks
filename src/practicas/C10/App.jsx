import { useState } from "react";
import "../../App.css";
import Form from "./componentes/Form";
import Card from "./componentes/Card";

function App() {
  const [listaPedido, setListaPedido] = useState([])
  const agregarData=(datos)=>{
    setListaPedido([...listaPedido, datos]);
  }
  const eliminarData=(datos)=>{}
  return (
    <>
      <h2>Haga su pedido aqui!</h2>
      <Form data={agregarData}></Form>
      <h3>Pedidos realizados</h3>
      {listaPedido.length==0 ? <p>No tienes pedidos en procesos.</p> :<Card data={listaPedido}/>}
    </>
  )
}

export default App;
