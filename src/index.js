// import './index.css'
// import ReactDOM from 'react-dom'
// import React from 'react'

// import Comp from './components/basicos/Primeiro'

// const el = document.getElementById('root'); //pode ser criado uma constante
// ReactDOM.render(
//     '<div>Olá React</div>',
//     //  el
//     document.getElementById('root')
// )

///////////////////////////////////////////////
//aula2 Conhecendo JSX///////////////////////////////////////

// const tag = <strong>Olá React</strong>

// ReactDOM.render(
//     <div>
//         {tag}
//     </div>,
//     //  el
//     document.getElementById('root')
// )
///////////////////////////////////////////////
//aula3 Carregando CSS        /////////////////
// const tag = <strong>Olá React</strong>

// ReactDOM.render(
//     <div>
//         {tag}
//     </div>,
//     //  el
//     document.getElementById('root')
// )

///////////////////////////////////////////////
//aula4 Primeiro Componente   /////////////////

// import './index.css'
// import ReactDOM from 'react-dom'
// import React from 'react'

// import Primeiro from './components/basicos/Primeiro'

// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//     </div>,
//     //  el
//     document.getElementById('root')
// )

///////////////////////////////////////////////
//aula 5 Componente com Propriedade   /////////////////

// import './index.css'
// import ReactDOM from 'react-dom'
// import React from 'react'

// import Primeiro from './components/basicos/Primeiro'
// import ComParametro from './components/basicos/ComParametro'

// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         <ComParametro 
//             titulo="Situação do Aluno" 
//             aluno="Pedro" 
//             nota={9.3}/>
//     </div>,
//     //  el
//     document.getElementById('root')
// )

/////////////////////////////////////////////////

//React Fragment
// import './index.css'
// import ReactDOM from 'react-dom'
// import React from 'react'

// import Primeiro from './components/basicos/Primeiro'
// import ComParametro from './components/basicos/ComParametro'
// import Fragmento from './components/basicos/Fragmento'

// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         <ComParametro 
//             titulo="Situação do Aluno" 
//             aluno="Pedro" 
//             nota={9.3}/>
//         <Fragmento/>
//     </div>,
//     //  el
//     document.getElementById('root')
// )

//COMPONENTE APP

import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'


ReactDOM.render( <
    App / > ,
    document.getElementById('root')
)