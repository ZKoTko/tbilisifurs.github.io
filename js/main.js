var hiddenElement = document.getElementById("box");
var alogo = document.querySelector('.alogo');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

alogo.addEventListener('click', handleButtonClick);