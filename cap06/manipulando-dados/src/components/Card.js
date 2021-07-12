import React from 'react'

export default function Card(props) {
  return (
    <>
     <h3 className="titPagina">{props.tituloPagina}</h3>
     <button 
      type="button" 
      className="btn"
      onClick={props.onAlterarTitulo}
     >Alterar Página</button>
     <p>
        ISBN: {props.dados.isbn} <br />
        Título: {props.dados.titulo} <br />
        Autor: {props.dados.autor} <br />
      </p> 
    </>
  )
}
