const mediaFactory = (media, nameOfPhotographer) => {
  const { title, likes, image, video, id } = media;

  const namePhotographerContact = document.querySelector(
    ".namePhotographerContact"
  );
  const modal = document.querySelector(".modal");
  namePhotographerContact.innerHTML = `Contactez moi ${nameOfPhotographer}`;
  modal.setAttribute("aria-labelledby", `Contactez moi ${nameOfPhotographer}`);

  const name = nameOfPhotographer;
  const mediaPictures = "assets/images/Sample Photos/";

  const afficheMediaPhotographer = () => {
    const article = document.createElement("article");
    article.className = "articleMedia";
    /*Affiche une video, sinon on affiche une image*/
    if (video) {
      const videoContent = document.createElement("video");
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("onclick", `showMediaModal(${id})`);
      videoContent.className = "mediaImage";
      videoContent.src = mediaPictures + name + "/" + video;
      videoContent.setAttribute("alt", title);

      link.appendChild(videoContent);
      article.appendChild(link);
    } else {
      const img = document.createElement("img");
      // on met l'image dans un lien pour pouvoir y accéder avec le btn tabulation
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("onclick", `showMediaModal(${id})`);
      img.className = "mediaImage";
      img.src = mediaPictures + name + "/" + image;
      img.setAttribute("alt", title);

      link.appendChild(img);
      article.appendChild(link);
    }

    const div = document.createElement("div");
    div.className = "displayTitleLikes";
    div.innerHTML = `
         
             <h3>${title}</h3>
             <div class= "display">
               <button class="likeButton" data-index=${id} id=${id} type="button" onclick= "likeMedia(${id})"  aria-label="likes" tabindex="0">${likes}</button>
             </div>        

           `;

    article.appendChild(div);

    return article;
  };
  return { name, title, likes, image, video, afficheMediaPhotographer };
};
