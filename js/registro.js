db = firebase.firestore();
const registro = document.getElementById('registro');

formulario.addEventListener('submit', e =>  {
    e.preventDefault();
    const nombreApellido = document.getElementById('nameLastname').value;
    const correo = document.getElementById('email').value;
    const contraseña = document.getElementById('contrasena').value;
    if(nombreApellido.length != 0 && cedula.length != 0 && telefono.length != 0
    && patente.length != 0 && correo.length != 0 && contraseña.length != 0) {
        console.log('if')
        firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then(Response => {
            const userId = Response.user.uid;
            firebase.database().ref('users/' + userId).set( {
               Nombre: nombreApellido,
               Correo: correo, 
               Contraseña: contraseña 
            })
            console.log('ya envie los datos');
            
        })
       // location.href = '../login/login.html';
    }
});
