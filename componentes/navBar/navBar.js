
let navBarVid = document.createElement('div');
navBarVid.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN0PmhbJPF74ucqfmLzr4qSvOY0zYoanqKA&s";
imgLogo.className = "img-logo";
navBarVid.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Pablo Girón "; 
navBarVid.appendChild(h2);

let toolsSection = document.createElement('div');
toolsSection.className = "tools-section";

const toolNames = ["Nombre Herramienta", "Nombre Herramienta", "Nombre Herramienta", "Nombre Herramienta", "Nombre Herramienta", "Nombre Herramienta"];
const colors = ["purple", "blue", "orange", "green", "red", "black"];

toolNames.forEach((toolName, index) => {
let toolDiv = document.createElement('div');
toolDiv.className = "tool-div";

let colorBox = document.createElement('div');
colorBox.style.backgroundColor = colors[index];
colorBox.className = "color-box";
toolDiv.appendChild(colorBox);

let toolLabel = document.createElement('input');
toolLabel.value = toolName;
toolLabel.className = "tool-label";
toolDiv.appendChild(toolLabel);

toolsSection.appendChild(toolDiv);
});

navBarVid.appendChild(toolsSection);

let contactSection = document.createElement('div');
contactSection.className = "contact-section";

let contactTitle = document.createElement('h3');
contactTitle.innerText = "Contactar";
contactSection.appendChild(contactTitle);

["Nombre", "Correo"].forEach((placeholder) => {
let inputField = document.createElement('input');
inputField.placeholder = placeholder;
contactSection.appendChild(inputField);
});

let messageField = document.createElement('textarea');
messageField.placeholder = "Mensaje";
contactSection.appendChild(messageField);

let sendButton = document.createElement('button');
sendButton.innerText = "Enviar";
contactSection.appendChild(sendButton);

navBarVid.appendChild(contactSection);

export { navBarVid };
