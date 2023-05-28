import "../../App.css";
import ProductCard from "./componentes/ProductCard";
import dataProducto from "../../../fakeApi/products.json"
import dataCuentas from "../../../fakeApi/accounts.json"
import dataUsuario from "../../../fakeApi/users.json"
import { Lista, Items } from "./componentes/Lista";

let id=0
let id1=0
function App() {
  const lista =[]
  let booleans=true
  const changuito = (props) => {
    return lista.push(props)
  }
  const changuito2 =()=> {
    booleans?booleans=false:booleans=true;
    if (lista.length===0) {
      return (
        <>
          <p>No tienes ningun producto en el changuito</p>
          <br />
          <hr />
        </>
    )} else{
      return(
        <div>
          {lista.map((item)=>{
            console.log(item)
            //no entendi como hacerlo hasta aca llegue
            return (
              <>
                <Items key={item.id+id++} productoListaNombre={item.nombre} precio={item.precio} descripcion={item.descripcion} />
                <br />
                <hr />
              </>
            )}
          )}
        </div>
      )
    }
  }
  const result = changuito2()
  return (
  <>
    <button onClick={changuito2}>Carrito</button>
    {booleans?result:undefined}
    {/* <Lista>
      {dataProducto.map((product)=>{
        return (
          <Items key={product.id} productoListaNombre={product.nombre} precio={product.precio} descripcion={product.descripcion} />
        )}
      )}
    </Lista> */}
    {/* <Lista>
      {dataCuentas.map((cuentas)=>{
          return(
          <Items key={id++} nombreCuenta={cuentas.userName} cuenta={cuentas.account} />
        )}
      )}
    </Lista> */}
    {/* <Lista>
      {dataUsuario.map((usuario)=>{
          return(
          <Items key={id1++} apodo={usuario.apodo} mascotas={usuario.mascotas} />
        )}
      )}
    </Lista> */}
    {dataProducto.map((product)=>{
      return(
        <ProductCard
        key={product.id}
        id={product.id}
        titulo={product.nombre}
        precio={product.precio}
        descripcion={product.descripcion}
        addToCart={changuito}
        ></ProductCard>
      )}
    )}
  </>
  )
}

export default App;