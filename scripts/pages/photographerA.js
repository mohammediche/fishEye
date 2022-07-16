const id = new URLSearchParams(window.location.search).get("key");
const photographerHeaderContent =  document.querySelector(".photograph-header");
const allMedia = document.querySelector(".allMedia");
const lightbox = document.querySelector("#mediaModal");
/* on fetch la data qui inclus les photographers et media */
const fetchPhotographers = async ()=>{
    const response = await fetch("/data/photographers.json");
    const results = await response.json();
    return results;
}

/**  on filtre le tableau photographers pour retourné le user sélectionné en suivant son id  **/
const displayData = async (photographers, media)=>{

    const filterPhotographer = photographers.filter ((photographer)=>{
        return photographer.id == id  
    })[0]
    const photographerModel = photographerFactory(filterPhotographer);
    const templatePhotographer = photographerModel.getDataPhotographer();
    photographerHeaderContent.appendChild(templatePhotographer);
    
/**  on filtre le tableau media pour retourné tout les medias d'un seul user  **/
    const filterMedia = media.filter((media)=>{       
        return media.photographerId == id;
    })
    /** tri select **/
    // getMediaData(filterMedia);
    // triParPopularite(filterMedia);
    // trieParTitre(filterMedia);
    // trieParDate(filterMedia);
    /****************/
   
    filterMedia.forEach(mediaOfPhotographer => {
        const mediaModel = mediaFactory(mediaOfPhotographer, filterPhotographer.name);
        const templateMedia = mediaModel.getMediaPhotographer();
        allMedia.appendChild(templateMedia);
        /* lightbox */
        const lightboxModal = lightboxFactory(mediaOfPhotographer, filterPhotographer.name);
        const templateLightbox = lightboxModal.getlightbox();
        lightbox.appendChild(templateLightbox);
      
        
    });
 
 }
 // recup des media d'un photographe 
const getMediaByPhotographerId = async (id, triPar)=>{
    const { photographers,media  } = await fetchPhotographers();

 
    const filterMedia = media.filter((media)=>{       
        return media.photographerId == id;
    })
    
    if (triPar === "Date") {

        return filterMedia.sort((a, b)=>{
            return a.date < b.date? 1: -1;
        })

    }else if (triPar === "Titre"){

        return filterMedia.sort((a,b)=>{
            return a.title > b.title? 1: -1;
      })

    }else{

        return filterMedia.sort((a,b)=>{
            return b.likes - a.likes  
        })
    }
    
}

 const init = async ()=> {
    // Récupère les datas des photographes
    const { photographers,media  } = await fetchPhotographers();
    displayData(photographers, media);
   
};

init();
