const lightboxFactory = (media, nameOfPhotographer)=>{
  const {title, image, video} = media;
  const name = nameOfPhotographer;
  const mediaPictures = "assets/images/Sample Photos/";
  // console.log(media);


  const getlightbox = ()=>{
      const div = document.createElement("div");
      div.className = "media";
      
      if (video) {
          const videoContent = document.createElement("video");
          videoContent.className = "videoModal";
          videoContent.setAttribute("alt", title);
          videoContent.type = "video/mp4";
          // videoContent.src = mediaPictures+name+"/"+video;

          div.appendChild(videoContent)
          
      } else {
        const img = document.createElement("img");
        img.className = "imageModal";
        img.setAttribute("alt", title);
        // img.src = mediaPictures+name+"/"+image;

        div.appendChild(img);
      }

      div.innerHTML += `
          
        <img class="close-modal" src="/assets/icons/close2.svg" alt="fermer la modale" onclick="hideMediaModal()">

      `
      
      return div;

  }
  return {title, image, video, getlightbox};
}

//  <h3 class="titleMediaModal">${title}</h3>
//       <img class="left-arrow" src="/assets/icons/left.png" alt="portrait précédent">
//<img class="right-arrow" src="/assets/icons/right.png" alt="portrait suivant">
