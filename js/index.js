function pressButton(page){
    var servidor = document.getElementById('servidor')
    var regras = document.getElementById('regras')
    var contato = document.getElementById('contato')

    if (page == "servidor"){
        servidor.style.display = "flex";
        regras.style.display = "none";
        contato.style.display = "none";
    }

    if (page == "regras"){
        servidor.style.display = "none";
        regras.style.display = "block";
        contato.style.display = "none";
    }

    if (page == "contato"){
        servidor.style.display = "none";
        regras.style.display = "none";
        contato.style.display = "flex";
    }
}

function doacoes(){
    window.location.href="https://stateofwar.xyz/doacoes"
}

