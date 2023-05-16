import "../../App.css";
import data from "../../../fakeApi/users.json"

function App() {
  const ejercicio1=() =>{
    console.log("1)\n" + data[0].email + "\n" + data[2].apodo + "\n" + data[2].mascotas[1].color);
    //cambie el valor entre llaves del div por: ejercicio1()
  }
  const ejercicio2=() =>{
    const [elemento1, , ,elemento4] = data;
    const [email,mascotas] = [elemento1.email, elemento1.mascotas];
    console.log("2)\n" + email + "\nmascotas:\n" + JSON.stringify(mascotas) + "\nusuario 4:\n" + JSON.stringify(elemento4));
    //cambie el valor entre llaves del div por: ejercicio2()
  }
  const ejercicio3=() =>{
    const mascotas = data[0].mascotas
    const mascotas2 = [...mascotas]
    mascotas2.push({ "nombre": "Nami", "edad": 2, "color": "negro" })
    console.log("3)\nOriginal:\n" + JSON.stringify(mascotas) +"\nModificado:\n"+ JSON.stringify(mascotas2));
    //cambie el valor entre llaves del div por: ejercicio3()

  }
  const ejercicio4=(props) =>{
    const name= props.apodo;
    const cantMascotas= props.mascotas.length; 
    return `El Usuario ${name} tiene ${cantMascotas} mascotas`
    //cambie el valor entre llaves del div por: ejercicio4(data[0])
  }
  const ejercicio5=(props) =>{
    const array1 = props.filter((obj)=> obj.mascotas.length > 1 ? true : false)
    const array2 = array1.map((obj) => ejercicio4(obj));
    console.log("5)\n" + JSON.stringify(array2));
    //cambie el valor entre llaves del div por: ejercicio5(data)
  }

  return <div className="App">{ejercicio5(data)}</div>;
}

export default App;
