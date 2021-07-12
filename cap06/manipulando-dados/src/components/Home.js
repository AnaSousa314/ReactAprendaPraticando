import React from 'react'

// EXEMPLO 01
// export default function Home(props) {
//   console.log(props);
//   return (
//     <>
//       <h3>{props.children}</h3>
//       <p>
//         ISBN: {props.isbn} <br />
//         Título: {props.titulo} <br />
//         Autor: {props.autor} <br />
//       </p>
      
//     </>
//   )
// }

// EXEMPLO 02

export default function Home(props) {
  console.log(props);
  return (
    <>
      <h3>{props.tituloPagina}</h3>
      
      {props.dados.map((item,i)=>(
        <p>
          ISBN: {props.dados[i].isbn} <br />
          Título: {props.dados[i].titulo} <br />
         Autor: {props.dados[i].autor} <br />
        </p>
      ))}
    </>
  )
}