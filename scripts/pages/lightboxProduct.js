const mediaModal = document.querySelector("#mediaModal");
const body = document.querySelector("body");
const mediaOfPhotographer = document.querySelector(".allMedia");
const photographHeader = document.querySelector(".photograph-header");
const widget = document.querySelector(".widget");

/* show & hide media modal */
const showMediaModal = (idPictureSelected) => {
  mediaModal.style.display = "block";
  /** display none le contenu en dessous */
  photographHeader.style.display = "none";
  widget.style.display = "none";
  mediaOfPhotographer.style.display = "none";
  /****/
  const getAllMedia = document.querySelectorAll(".media");

  for (let index = 0; index < getAllMedia.length; index++) {
    const media = getAllMedia[index];

    const idOfMedia = parseInt(media.dataset.index);

    // affiche la media selectionné, et display none le reste des medias
    if (idOfMedia === idPictureSelected) {
      media.style.display = "flex";
      body.style.overflow = "hidden";
    } else {
      media.style.display = "none";
    }
    // prev and next media
    const prevMedia = media.querySelector(".left-arrow");
    const nextMedia = media.querySelector(".right-arrow");

    prevMedia.onclick = () => {
      let prevIndexMedia;
      if (index == 0) {
        prevIndexMedia = getAllMedia.length - 1;
      } else {
        prevIndexMedia = parseInt(index) - 1;
      }
      const idPrevMedia = parseInt(getAllMedia[prevIndexMedia].dataset.index);
      showMediaModal(idPrevMedia);
    };
    nextMedia.onclick = () => {
      let nextIndexMedia;
      if (index == getAllMedia.length - 1) {
        nextIndexMedia = 0;
      } else {
        nextIndexMedia = parseInt(index) + 1;
      }
      const idNextMedia = parseInt(getAllMedia[nextIndexMedia].dataset.index);
      showMediaModal(idNextMedia);
    };

    ///////// onkeydown prev/next media modal with leftArrow / rightArrow ///////////
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") {
        // console.log(idPictureSelected);
        // let prevIndexMedia;
        // if (index == 0) {
        //   prevIndexMedia = getAllMedia.length - 1;
        // } else {
        //   prevIndexMedia = parseInt(index) - 1;
        // }
        if (idOfMedia === idPictureSelected) {
          console.log("index", index);
          let prevIndexMedia;
          if (index == 0) {
            prevIndexMedia = getAllMedia.length - 1;
          } else {
            prevIndexMedia = parseInt(index) - 1;
          }
          const idPrevMedia = parseInt(
            getAllMedia[prevIndexMedia].dataset.index
          );
          showMediaModal(idPrevMedia);
        }
        //
        // const idPrevMedia = parseInt(getAllMedia[prevIndexMedia].dataset.index);
        // showMediaModal(idPrevMedia);
      } else if (e.code === "ArrowRight") {
        if (idOfMedia === idPictureSelected) {
          console.log("index", index);
          let nextIndexMedia;
          if (index == getAllMedia.length - 1) {
            nextIndexMedia = 0;
          } else {
            nextIndexMedia = parseInt(index) + 1;
          }
          const idPrevMedia = parseInt(
            getAllMedia[nextIndexMedia].dataset.index
          );
          showMediaModal(idPrevMedia);
        }
      }
    });
  }
  ///////// Escape button to close modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mediaModal.style.display = "none";
      body.style.overflow = "visible";
      /** réapparaître le contenu en dessous de la modal une fois fermé */
      photographHeader.style.display = "block";
      widget.style.display = "flex";
      mediaOfPhotographer.style.display = "flex";
    }
  });
  ///////// onkeydown prev/next media modal with leftArrow / rightArrow ///////////
  // window.addEventListener("keydown", (e) => {
  //   if (e.code === "ArrowLeft") {
  //     for (let index = 0; index < getAllMedia.length; index++) {
  //       const media = getAllMedia[index];

  //       const idOfMedia = parseInt(media.dataset.index);

  //       // affiche la media selectionné, et display none le reste des medias
  //       if (idOfMedia === idPictureSelected) {
  //         console.log("index", index);
  //         let prevIndexMedia;
  //         if (index == 0) {
  //           prevIndexMedia = getAllMedia.length - 1;
  //         } else {
  //           prevIndexMedia = parseInt(index) - 1;
  //         }
  //         const idPrevMedia = parseInt(
  //           getAllMedia[prevIndexMedia].dataset.index
  //         );
  //         showMediaModal(idPrevMedia);
  //       }
  //     }
  //   } else if (e.code === "ArrowRight") {
  //     let nextIndexMedia;
  //     if (index == getAllMedia.length - 1) {
  //       nextIndexMedia = 0;
  //     } else {
  //       nextIndexMedia = parseInt(index) + 1;
  //     }
  //     const idNextMedia = parseInt(getAllMedia[nextIndexMedia].dataset.index);
  //     showMediaModal(idNextMedia);
  //   }
  // });
};

const hideMediaModal = () => {
  mediaModal.style.display = "none";
  body.style.overflow = "visible";
  /** réapparaître le contenu en dessous de la modal une fois fermé */
  photographHeader.style.display = "block";
  widget.style.display = "flex";
  mediaOfPhotographer.style.display = "flex";
};
