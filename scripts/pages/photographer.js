const photographerHeaderContent =  document.querySelector(".photograph-header");
const allMedia = document.querySelector(".allMedia");
const id = new URLSearchParams(window.location.search).get("key");
const profilPictures = "assets/images/Sample Photos/Photographers ID Photos/";
const mediaPictures = "assets/images/Sample Photos/";

/* on fetch la data qui inclus les photographers et media */
const fetchPhotographers = async ()=>{
    const response = await fetch("/data/FishEyeData.json");
    const results = await response.json();
    return results;
}
/**  on filtre le tableau photographers pour retourné le user sélectionné en suivant son id  **/
const getDataPhotographer = async ()=>{
   const data = await fetchPhotographers();
   const filterPhotographer = data.photographers.filter ((photographer)=>{
       return photographer.id == id  
   })[0]
   console.log(filterPhotographer);
  
       let template = `
         <div class="info-photograph-header">
             <div class="aboutPhotographer">
               <h1>${filterPhotographer.name}</h1>
               <h2 class="location">${filterPhotographer.city+ ", "  +filterPhotographer.country}</h2>
               <strong>${filterPhotographer.tagline}</strong>
             </div>  
             
           <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
             <img class= "imagePhotographer" src= "${profilPictures+filterPhotographer.portrait}" alt="${filterPhotographer.name}">
        </div>
          <aside>
          <span>230 404♥︎</span>
          <span>${filterPhotographer.price}€/jour</span>
          </aside>

       `
       photographerHeaderContent.innerHTML = template;
   
}
getDataPhotographer();

/*******  on filtre et affiche les medias d'un utilisateur  ********/
const getMediaPhotographer = async()=>{
    const data = await fetchPhotographers();
    /** cet parti du code est à revoir car c'est une répétition et voir si je peux le ramener directement de la fonction d'au dessus***/
    const filterPhotographer = data.photographers.filter ((photographer)=>{
        return photographer.id == id  
    })[0] 
  
   
  
    
    const filterMedia = data.media.filter((media)=>{
        return media.photographerId == id;
    })

    
    let mediaTemplate = "";
    filterMedia.forEach(media => {
    
        mediaTemplate += `
          <article class= "articleMedia">
           <img class= "mediaImage" src= "${mediaPictures+filterPhotographer.name+"/"+media.image}" alt="${media.title}">
            <div class= "displayTitleLikes">
              <h3>${media.title}</h3>
              <p>${media.likes} <span>♡♥︎</span> </p>
            </div>   
          </article>

        `
        allMedia.innerHTML = mediaTemplate;
        console.log();
        
    });
}
getMediaPhotographer();













