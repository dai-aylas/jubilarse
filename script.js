

function PuedoJubilarme(){
    let sexo=document.getElementById("Sexo").value.toUpperCase();
    let edad= parseInt(document.getElementById("Edad").value);

    let FemMinima =60;
    let MascMinima =65;
    let rta="";    

    if(sexo=="FEMENINO" && edad >= FemMinima){
        
        rta= "YA SE PUEDE JUBILAR !";
    }
    else if(sexo=="FEMENINO"){
        rta= "Aún NO puedes jubilarte !\nTe faltan "+(FemMinima-edad)+ " años";
    }
    else if(sexo=="MASCULINO" && edad >= MascMinima){
        rta= "YA SE PUEDE JUBILAR !";    
    }
    else if(sexo=="MASCULINO"){
        rta= "Aún NO puedes jubilarte !\nTe faltan "+(MascMinima-edad)+ " años";    
    }
    else{
        rta= "Sexo NO valido, intente nuevamente...";
    }
    document.getElementById("Resultado").textContent = rta;
}