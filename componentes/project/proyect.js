function proyectos(){
    let section = document.createElement('section');
    section.className="section-hader";
    section.appendChild(header());
    section.appendChild(list());
    

    return section

}

//Funcion Header
function header(){
let div =document.createElement('div')
div.className= 'header';

let h2 = document.createElement('h2');
h2.innerText= "Proyectos";
div.appendChild(h2);

let btn = document.createElement('div');
btn.innerHTML= "GitHub";
div.appendChild(btn);

return div;

}

//Item Lista 
function list(){
    let div = document.createElement('ItemList');
    div.innerText="Item List";
    return div;
}


export {
    proyectos
}
