/* Llamando a los elementos */ 
const alert=document.getElementById("alert")
const button=document.getElementById("send-button")
const fields=document.getElementsByClassName("validate") // Me da un HTML collection
/*Transformando fields en un array */
const fieldsArray=Array.from(fields)

/*1.Llamando a una función al hacer click
  2.Recorriendo los elementos del array y comprobando su validez
  3.Si campo vacío (false) sacamos la alerta
*/

button.addEventListener("click",()=>{
    for(const element of fieldsArray){
        if(element.checkValidity()==false){
            alert.classList.replace("d-none", "d-block")
            return
        }    
    }
})


