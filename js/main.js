/*//FUNCIÓN PARA SIDEBAR DE MATERIALIZE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
//FUNCIÓN PARA SIDEBAR DE MATERIALIZE*/

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

function saveData() {
    if((document.getElementById("login-username").value === "") || (document.getElementById("login-password").value === "")){
        alert("no puedes dejar campos vacios")    
        }else{
            let user = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;
            localStorage.setItem(user,password);
        }

    document.getElementById("loginbox").innerHTML = "";
    for(let i=0; i < localStorage.length; i++) {
        let userName = localStorage.key(i);
        let userPassword = localStorage.getItem(userName);
    }
    if(typeof(Storage) !== "undefined"){
        document.getElementById("login-username").value = "";
        document.getElementById("login-password").value = "";
    }else{
        alert("lo sentimos, el web Storage no tiene soporte");
    }
}


