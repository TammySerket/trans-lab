
//con esto tomo el numero de codigo que ingrese el usuario

let input = document.querySelector('input');
        // 13 is enter
          // code for enter
          input.addEventListener("keypress",(enter)=>{
            let key = enter.which || enter.keyCode;
            if (key === 13) {
            let num = input.value;
              //  getBip(num => {

          fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${num}`) 
            .then(response => response.json())
            .then(data => {
              
                console.log(data) 
            })   
        }    
    })               
        
     /*const numberBip = getBip.toString(input);
     console.log((numberBip).value);*/
     
     

/*const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let datos = new FormData(formulario)

})
let usuario = []
let pass = []
if(usuario === " " || pass === " "){
    usuario ="Llena los campos solicitados";
    pass = "Llena los campos solicitados";
}else {
    usuario = "";
    pass = "";
} */



