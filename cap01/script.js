/* 
      1.5 ARROW FUNCTIONS
*/

//Como esta entre parenteses, não se faz necessário o uso do 'return'
// Exemplo 3
let avaliar1 = (x,y,z)=>(
  x < 10 ? y + z : y * z
)

console.log(avaliar1(1,2,3))


/* 
      1.10 ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
*/
// Exemplo 1 - Desestruturação de um array
// Note que ao desestruturar já demos nomes as variaveis

const livros = ["CSS3","HTML5","JavaScript","React"];

let [css,html5,js,react] = livros;

console.log(css)
console.log(react)

// Exemplo 2 - Desestruturação de um objeto

const livross = [
  {titulo: "React", autor: "Mauricio"},
  {titulo: "Node", autor: "Ricardo"},
  {titulo: "UX", autor: "Will"}
]

let [livro1,livro2,livro3] = livross;

console.log(livro1.autor);
console.log(livro2.titulo);



