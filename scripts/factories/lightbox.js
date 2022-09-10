const lightboxFactory = (media, nameOfPhotographer) => {
  const { title, image, video, id } = media;
  const name = nameOfPhotographer;
  const mediaPictures = "assets/images/Sample Photos/";

  const getlightbox = () => {
    const div = document.createElement("div");
    div.className = "media";
    div.setAttribute("data-index", id);

    if (video) {
      const videoContent = document.createElement("video");
      videoContent.className = "videoModal";
      videoContent.setAttribute("alt", title);
      videoContent.type = "video/mp4";
      videoContent.setAttribute("src", mediaPictures + name + "/" + video);
      videoContent.setAttribute("controls", "true");
      videoContent.autoplay = true;

      div.appendChild(videoContent);
    } else {
      const img = document.createElement("img");
      img.className = "imageModal";
      img.setAttribute("alt", title);
      img.setAttribute("src", mediaPictures + name + "/" + image);

      div.appendChild(img);
    }

    div.innerHTML += `
          
          <button type= "button" aria-label="fermer la modale" onclick="hideMediaModal()">
          <img class="close-modal" src="/assets/icons/close2.svg" alt="fermer la modale" >
          </button>
        
    
          <button type= "button" class="left-arrow" aria-label= "passer au media précédent"></button>
          <button type= "button" class="right-arrow" aria-label= "passer au media suivant"></button>
          <h3 class="titleMediaModal">${title}</h3> 

      `;

    return div;
  };
  return { title, image, video, getlightbox };
};
