let bip = database.ref("bipNumber");
let db = firebase.database();
//con esto tomo el numero de codigo que ingrese el usuario
let input = document.getElementById('consultaSaldo');
const btnTarjeta = document.getElementById("btnConsulta");
const result = document.getElementById("result");
const bipJson = "https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=";

fetch(bipJson)
.then(response => response.json())
.then(data => {
    console.log(data);
    datosTarjeta(data);
});

const datosTarjeta = data => {
    btnTarjeta.addEventListener("click", () => {
        const render = data.forEach(element => {
            return result.innerHTML += `<p>${element.saldoTarjeta}</p>`;
        });
        console.log(render);
        return render;
    });
};


 /*       // 13 is enter
          // code for enter
          input.addEventListener("keypress",(enter)=>{
            let key = enter.which || enter.keyCode;
            if (key === 13) {
            let num = input.value;
            //  getBip(num => {

          fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${num}`) 
            .then(response => response.json())
            .then(data => {
              
                console.log(data); 
                ref.push(data);
            });   
        }    
    });     */
    
        
    function saveNumCard(bipCard) {
        //generando elemtos DOM
        const bipCard = document.createTextNode(numberBip);
        const bipButton = document.createElement("button");
        let numberBip = input.value;
        if(document.getElementById("tarjeta").value === ""){
            alert("Ingresa el numero de tu tarjeta BIP")
        }else{
        bipCard.push(bipButton);
        }
    } 

     const numberBip = getBip.toString(input);
     console.log((numberBip).value);   

/*function saveData() {
    if((document.getElementById("nameLastname").value === "") || (document.getElementById("login-password").value === "")){
        alert("no puedes dejar campos vacios")    
        }else{
            let user = document.getElementById("nameLastname").value;
            let password = document.getElementById("password").value;
            localStorage.setItem(user,password);
        }

    document.getElementById("loginbox").innerHTML = "";
    for(let i=0; i < localStorage.length; i++) {
        let userName = localStorage.key(i);
        let userPassword = localStorage.getItem(userName);
    }
    if(typeof(Storage) !== "undefined"){
        document.getElementById("nameLastname").value = "";
        document.getElementById("password").value = "";
    }else{
        alert("lo sentimos, el web Storage no tiene soporte");
    }
}*/

