function login(){
    var c="79734418";
    var u="dal.smith.d@gmail.com"

    if(document.getElementById('password').value==c && document.getElementById('username').value==u){
        window.location=("panel-de-control.html")
    }
    else{
        alert("Nombre de usuario y/o contraseña incorrectos.")
    }
}