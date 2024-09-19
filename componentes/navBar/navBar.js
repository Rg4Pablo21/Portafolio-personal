
let navBarVid = document.createElement('div');
navBarVid.className = "nav-bar-vid";

let imgLogo = document.createElement('img');
imgLogo.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNPS5n7rTajUyQd8FU6TqGIitvw2CMuvrOg&s"
imgLogo.className="Img-log";
navBarVid.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText="Jossue Fuentes"
navBarVid.appendChild(h2);

export {navBarVid}
