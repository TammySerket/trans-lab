/* db = firebase.firestore();
const registro = document.getElementById('registro');

registro.addEventListener('submit', e =>  {
    e.preventDefault();
    if(nombreApellido.length != 0 && correo.length != 0 && contraseña.length != 0) {
        console.log('if')
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then(Response => {
            const userId = Response.user.uid;
            firebase.database().ref('users/' + userId).set( {
               Nombre: nombreApellido,
               Correo: correo, 
               Password: password 
            })
            console.log('ya envie los datos');
            
        })
       // location.href = "../menu.html";
    }
}); */

/*function registrar(){
    const nombreApellido = document.getElementById('nameLastname').value;
    const correo = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(correo, password, nombreApellido)
    .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
}*/

//Registro
function registerWithFirebase(){
    //const nombreApellido = document.getElementById('nameLastname').value;
    const correo = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    firebase.auth().createUserWithEmailAndPassword(correo, password)
        .then(()=>{
            console.log("Usuario creado con éxito");
        })
        .catch((error)=>{
            console.log("Error de firebase > Código > "+error.code); //error.code nos mostrará el código de error para informarnos qué pasó
            console.log("Error de firebase > Mensaje > "+error.message); //error.message nos mostrará el mensaje de firebase del mismo error
        });
}