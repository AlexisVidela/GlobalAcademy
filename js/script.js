let id = 0;
carrusel(true);
function carrusel(num){
    const txtbox = document.getElementById('txtbox');
    const txtinf = document.getElementById('txtboxinf');
    const box =  document.getElementById('box-slider');
    if (num) {
        if (id<3){
         id++;
        }else{id=0;}
    }else{
        if (id>0){
            id--;
           }else{id=3;}
    }
    if (id==0){
        box.style.backgroundImage = "url(../img/agenda.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center center";
        txtbox.textContent="Agenda de tareas";
        txtinf.textContent="aplicación donde podrás crear una tarea i marcarla como concluida o eliminarla";
        return;
    }
    if (id==1){
        box.style.backgroundImage = "url(../img/calculadora.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
        txtbox.textContent="Calculadora";
        txtinf.textContent="calculadora con operaciones básicas";
        return;
    }
    if (id==2){
        box.style.backgroundImage = "url(../img/graficos.jpg)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center center";
        txtbox.textContent="Sistema de Stock";
        txtinf.textContent="aplicación donde podrá almacenar información de productos, actualizar stock o retirar material";
        return;
    }
    if (id==3){
        box.style.backgroundImage = "url(https://th.bing.com/th/id/R.505672f2bd5dbf0b1d5e9f78d2090838?rik=Si2dUcbSDuNKBA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f7rhrsIf.jpg&ehk=qFtPjAA2O7HVhvjoB%2bVQ9x0xuRAdDKiPu0vOv7gYaBo%3d&risl=&pid=ImgRaw&r=0)";
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center center";
        txtbox.textContent="Pronostico del tiempo";
        txtinf.textContent="aplicación que utiliza API´s para ver el clima de la ciudad solicitada";
        return;
    }
}

function viewweb(){
    switch(id){
        case 0: {window.location.href = "../html/admintareas.html"}
        break;
        case 1: {window.location.href = "../html/calculadora.html"}
        break;
        case 2: {window.location.href = "../html/sistemadestock.html"}
        break;
        case 3: {window.location.href = "../html/pronostico.html"}
        break;
    }
}