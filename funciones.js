const inp = document.querySelector(".inp")
const botones = document.querySelectorAll(".botonl")


botones.forEach(boton => {
  boton.addEventListener ("click", () => {
    const btnA = boton.textContent;
    
    if (inp.textContent === "0") {
      
      inp.textContent = btnA;
      
    } else {
      
      inp.textContent += btnA;
      
    }
    
  })
})

const hablar = querySelector(boton)

hablar.addEventListener("click", (speech()))


function speech(){
  
  var text=document.getElementById('text').value;
  if (text!=""){
    voz.text=text;
    window.speechSynthesis.speak(voz);
  }
}
var voz= new SpeechSynthesisUtterance();
voz.lang="es-ES";