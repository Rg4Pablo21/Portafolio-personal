import { navBarVid } from "./componentes/navBar/navBar.js";
import { proyectos } from "./componentes/project/proyect.js";
/* Componentes de la página */
let DOM=document.querySelector("#root");

/* navBar */
let navBar= document.createElement('section');
navBar.className="nav-bar";
navBar.appendChild(navBarVid)
DOM.appendChild(navBar);

let proyect = document.createElement('section')
proyect.classList="proyect";
proyect.appendChild(proyectos())

DOM.appendChild(proyect); 
