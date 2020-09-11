let btonA = document.querySelector("#bton1");
let btonB = document.querySelector("#bton2");
let para1 = document.querySelector("#para");
        
        btonA.addEventListener("click", () =>{
            if(getComputedStyle(para1).display != "none"){
                para1.style.display = "none";
            } else {
                para1.style.display = "block";
            }
        });



let pr = this.id;
        btonB.addEventListener("click", () =>{
            let afficheP = prompt("Saisissez votre nom:");
            if (afficheP != null){
                let confP = confirm("Vous vous appelez vraiment " + afficheP);
                alert("Bonjour " + afficheP);
            }else {alert("Entrez votre nom");
            
  } 
});

/*a faire por completer le exercice:
ajouter un comportement au cas il y pas
de reponse de facon a revenir a la demande 
initial*/ 