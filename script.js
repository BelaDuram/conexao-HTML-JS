let logo = document.getElementById("logo");
console.log(logo);

let postAutores = document.getElementsByClassName("post-autor");
console.log(postAutores);

const blog_titles = document.getElementsByClassName("blog_title");
const input_name = document.getElementById("nome")
console.log(input_name);

const post02 = document.getElementById("post02");
console.log(post02);

const formulario = document.getElementById("formulario");
console.log(formulario);

const posts = document.getElementsByClassName("post");
console.log(posts);

const postsDatas = document.getElementsByClassName("post-data");
console.log(postsDatas);

const postsTextos = document.getElementsByClassName("post-texto");
console.log(postsTextos);

const listaRedes = document.getElementsByClassName("lista_redes");
console.log(listaRedes);

const lista_redes_itens = document.getElementsByClassName("lista_redes_item");
const post2_texts = document.getElementsByClassName("teste")

function printListText(array){
    for(let i = 0; i < array.length; i++) {
        console.log(array[i].innerText);
 };
};


printListText(lista_redes_itens);
console.log("_________________________________");
printListText(post2_texts);