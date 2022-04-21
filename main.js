const images = document.querySelectorAll("#galery img");
//Image active par défaut:
let imgActive = 0;
//On lui affecte la classe show (avec transition opacity 0.6s)

images[imgActive].classList.add("show");
//On boucle la galerie d'image pour afficher la 1ère et masquer les autres :
for(let i=1; i<images.length; i +=1){
    images[i].classList.add("hidden");
}


//Evenement click sur bouton "next" :

const next = document.querySelector("#next");
next.addEventListener("click", function(){
    avancer();
});


// ----- FUNCTION AVANCER ---------
const avancer =  function() {
    //D'abord on enlève la classe show puis on ajoute la class hidden  
    images[imgActive].classList.remove("show");
    images[imgActive].classList.add("hidden");
    
    imgActive += 1;
    //Test si on arrive à la fin de la galerie d'images on revient à zéro :
    if(imgActive >= images.length){
        imgActive = 0;
    }

    images[imgActive].classList.remove("hidden");

    setTimeout(() =>{
        //On rajoute la class show après un certain temps afin que l'on puisse voir la transition.

    images[imgActive].classList.add("show");
    
    }, 300)
    
};

//Evenement click sur bouton "prev" :
const prev = document.querySelector("#prev");
prev.addEventListener("click", function(){
    reculer();
});

// ----- FUNCTION RECULER ---------
const reculer = function(){
    images[imgActive].classList.remove("show");
    images[imgActive].classList.add("hidden");

    imgActive -=1;
    //A zéro imgActive prend la valeur de la taille du tableau - 1 (index commençant à zéro):
    if (imgActive < 0){
        imgActive = images.length - 1;
    }

    images[imgActive].classList.remove("hidden");

    setTimeout(() =>{
        //On rajoute la class show après un certain temps afin que l'on puisse voir la transition.

    images[imgActive].classList.add("show");
    
    }, 300)


    

}

//----- Boutons PLAY et PAUSE :

//on crée une variable globale : playInterval afin qu'on puisse la réutiliser dans la fonctionnalité de mise en pause :
let playInterval;

//Evenement click sur bouton "play" : On réutilise la fonction avancer().
const play = document.querySelector("#play");
play.addEventListener("click", function(){
    playInterval = setInterval(avancer, 2000);
});

//Evenement click sur bouton "pause" :
const pause = document.querySelector("#pause");
pause.addEventListener("click", function(){
    clearInterval(playInterval);
});