let navBarVid = document.createElement('div');
navBarVid.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN0PmhbJPF74ucqfmLzr4qSvOY0zYoanqKA&s";
imgLogo.className = "img-logo";
navBarVid.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Pablo Girón";
navBarVid.appendChild(h2);


export {navBarVid}




