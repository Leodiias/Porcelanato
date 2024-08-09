const formu = document.querySelector(".fale-conosco")
const mask = document.querySelector(".mascara-formulario")

function cliqueinobotao(){
formu.style.left = "50%"
formu.style.transform = "translateX(-50%)"
mask.style.visibility = "visible"
}
function voltar(){
    formu.style.left = "-300px"
    formu.style.transform = "translateX(0)"
    mask.style.visibility = "hidden" 
}