

function buttonPress(page){
    var armas = document.getElementById('weapons_page');
    var money = document.getElementById('money_page');
    var bases = document.getElementById('bases_page');
    var misc = document.getElementById('misc_page');
    var how_to_donate = document.getElementById('how_to_donate_page');
    
    if (page == 'weapons_page'){
        armas.style.display = "block"
        money.style.display = "none";
        bases.style.display = "none";
        misc.style.display = "none";
        how_to_donate.style.display = "none";
    };
    
    if (page == "money_page") {
        money.style.display = "block";
        armas.style.display = "none";
        bases.style.display = "none";
        misc.style.display = "none";
        how_to_donate.style.display = "none"
    };

    if (page == "bases") {
        armas.style.display = "none"
        money.style.display = "none";
        bases.style.display = "block";
        misc.style.display = "none";
        how_to_donate.style.display = "none";
    }

    if (page == "misc") {
        armas.style.display = "none"
        money.style.display = "none";
        bases.style.display = "none";
        misc.style.display = "block";
        how_to_donate.style.display = "none";
    }

    if (page == "how_to_donate") {
        armas.style.display = "none"
        money.style.display = "none";
        bases.style.display = "none";
        misc.style.display = "none";
        how_to_donate.style.display = "block";
    }
}