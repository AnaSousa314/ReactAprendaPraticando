import React from "react";

const Livro=({livro})=>(
  <>
    <main className="principal">
      <div className="pag-livro">
        <h2>{livro.titulo}</h2>
        <div className="livro">
          <img src={"/imagens/capas/" + livro.id + ".jpg"} alt={"Thumbnail da Capa do Livro "+livro.titulo} />
          <ul>
            <li>ISBN:{livro.isbn}</li>
            <li>Ano:{livro.ano}</li>
            <li>Páginas:{livro.paginas}</li>
            <li>Preço: R${livro.preco},00</li>
          </ul>
          <hr />
          <h3>Descrição do Livro</h3>
          <p>{livro.descrição}</p>
        </div>
      </div>
    </main>
  </>
);

export default Livro;