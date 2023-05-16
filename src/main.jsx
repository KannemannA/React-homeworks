import TituloH3 from './practicas/C2/componentes/TituloH3.jsx'
import ChildrenLista from './practicas/C2/componentes/ChildrenLista.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './practicas/C4/App.jsx'
import './index.css'
import Cards from './practicas/C4/componentes/Cards.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* Descomentar y cambiar el import App en el path practicas/C4/App.jsx
    <Cards title="titulo de la card" footer="footer de la card">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut fugiat, voluptatem est in ducimus repellat dolorem consequatur optio tempore. Accusantium praesentium facilis vitae maxime inventore asperiores voluptates perferendis accusamus.
      </p>
    </Cards> */}
    {/* Descomentar y cambiar el import App en el path practicas/C2/App.jsx
    <TituloH3 title="Loro" />
    <ChildrenLista>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ChildrenLista> */}
  </>
)
