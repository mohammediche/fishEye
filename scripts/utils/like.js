const likeMedia = (id) => {
  const allMedias = document.querySelectorAll(".articleMedia");
  const totalLikes = document.querySelector(".totalLikes");

  for (let index = 0; index < allMedias.length; index++) {
    const media = allMedias[index];
    const like = document.getElementById(id);
    const likeClass = media.querySelector(".likeButton");
    console.log(likeClass.dataset.index);

    if (id == likeClass.dataset.index) {
      like.classList.toggle("mediaLiked");
      if (media.querySelector(".mediaLiked")) {
        like.textContent++;
        totalLikes.textContent++;
      } else {
        like.textContent--;
        totalLikes.textContent--;
      }
    }
  }
};
