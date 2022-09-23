const id = new URLSearchParams(window.location.search).get("key");
const photographerHeaderContent = document.querySelector(".photograph-header");
const allMedia = document.querySelector(".allMedia");
const lightbox = document.querySelector("#mediaModal");
/* on fetch la data qui inclus les photographers et media */
const fetchPhotographers = async () => {
  const response = await fetch("/fishEye/data/photographers.json");
  const results = await response.json();
  return results;
};

/**  on filtre le tableau photographers pour retourné le user sélectionné en suivant son id  **/
const displayData = async (photographers, media) => {
  const filterPhotographer = photographers.filter((photographer) => {
    return photographer.id == id;
  })[0];
  /**  on filtre le tableau media pour retourné tout les medias d'un seul user  **/
  const filterMedia = media.filter((media) => {
    return media.photographerId == id;
  });
  const photographerModel = photographerFactory(filterPhotographer, filterMedia);
  const templatePhotographer = photographerModel.getDataPhotographer();
  photographerHeaderContent.appendChild(templatePhotographer);

  /** tri select **/
  const trierParPopulariteParDefaut = filterMedia.sort((a, b) => {
    return b.likes - a.likes;
  });
  /****************/

  trierParPopulariteParDefaut.forEach((mediaOfPhotographer) => {
    const mediaModel = mediaFactory(mediaOfPhotographer, filterPhotographer.name);
    const templateMedia = mediaModel.afficheMediaPhotographer();
    allMedia.appendChild(templateMedia);
    /* lightbox */
    const lightboxModal = lightboxFactory(mediaOfPhotographer, filterPhotographer.name);
    const templateLightbox = lightboxModal.getlightbox();
    lightbox.appendChild(templateLightbox);
  });
};

// recup des media d'un photographe
const getMediaByPhotographerId = async (id, triPar) => {
  const { photographers, media } = await fetchPhotographers();

  /** on filtre les photographers pour avoir le nom pour ensuite le passé en paramètres de la fonction mediaFactory  **/
  const filterPhotographer = photographers.filter((photographer) => {
    return photographer.id == id;
  })[0];
  /***/
  /** on récupere les medias d'un seul photographe */
  let filterMedia = media.filter((media) => {
    return media.photographerId == id;
  });
  /***/

  if (triPar === "Date") {
    const trieParDate = filterMedia.sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
    allMedia.innerHTML = " ";
    // affiche les medias triés par Date (du + récent au - récent)
    trieParDate.forEach((mediaOfPhotographer) => {
      const newMediaModel = mediaFactory(mediaOfPhotographer, filterPhotographer.name);
      const newTemplateMedia = newMediaModel.afficheMediaPhotographer(); //renvoi l'ancienne data
      allMedia.appendChild(newTemplateMedia);
    });
    return trieParDate;
  } else if (triPar === "Titre") {
    const trieParTitre = filterMedia.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
    allMedia.innerHTML = " ";
    // affiche les medias triés par Titre ( de A à Z)
    trieParTitre.forEach((mediaOfPhotographer) => {
      const newMediaModel = mediaFactory(mediaOfPhotographer, filterPhotographer.name);
      const newTemplateMedia = newMediaModel.afficheMediaPhotographer(); //renvoi l'ancienne data
      allMedia.appendChild(newTemplateMedia);
    });
    return trieParTitre;
  } else if (triPar === "Popularité") {
    const triParPopularite = filterMedia.sort((a, b) => {
      return b.likes - a.likes;
    });
    allMedia.innerHTML = " ";
    // affiche les medias triés par Popularité (+likes au -likes)
    triParPopularite.forEach((mediaOfPhotographer) => {
      const newMediaModel = mediaFactory(mediaOfPhotographer, filterPhotographer.name);
      const newTemplateMedia = newMediaModel.afficheMediaPhotographer(); //renvoi l'ancienne data
      allMedia.appendChild(newTemplateMedia);
    });
    return triParPopularite;
  }
};

const init = async () => {
  // Récupère les datas des photographes
  const { photographers, media } = await fetchPhotographers();
  displayData(photographers, media);
};

init();
