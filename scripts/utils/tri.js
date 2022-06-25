let selected = document.querySelector(".value"); 
/** permet d'ouvrir et fermer le select tri **/
const openSelectTri = ()=>{
    document.querySelector(".optList").classList.toggle("hidden");
    document.querySelector(".select").classList.toggle("active");
}
/** permet de trier les media par nombre de like, date, et ordre alphabétique **/
const refreshMediaList = (valueSelected)=> {

    selected.textContent = valueSelected;
    // Afficher avec la aria-selected true et false
    // LE PROBLEME C'EST LE selected.innerHTML QUI NE RECUPERE PAS LA VALEUR, SEULEMENT LA PREMIERE
  
    // getMediaData.triParPopularite();
    // getMediaData.trieParDate();
    // getMediaData.trieParTitre();
   
}

   // popularité 
const triParPopularite = (media)=>{
    
    let tableauTrierParNombreDeLike = media.sort((a,b)=>{
        return b.likes - a.likes  
    })
    console.log(tableauTrierParNombreDeLike);
}
//date
const trieParDate = (media)=>{
   
    let tableauTrierParDate = media.sort((a, b)=>{
        return a.date < b.date? 1: -1;
    })
    console.log(tableauTrierParDate);
}
//Titre
const trieParTitre = (media)=>{
   
    let tableauTrierParTitre = media.sort((a,b)=>{
        return a.title > b.title? 1: -1;
    })
    console.log(tableauTrierParTitre);
}





