
const likeMedia = (id)=>{
  
    const totalLikes = document.querySelector(".totalLikes");
    const like = document.getElementById(id);

    like.classList.toggle("mediaLiked");       

    if (document.querySelector(".mediaLiked")) {
        like.textContent++;
        totalLikes.textContent++;
    } else {
        like.textContent--;
        totalLikes.textContent--;
    }
    
}

