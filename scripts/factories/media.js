const mediaFactory = (media, nameOfPhotographer)=>{
   const { title, likes, image, video } = media;

 
   const name = nameOfPhotographer;
   const mediaPictures = "assets/images/Sample Photos/";

   const getMediaPhotographer = ()=>{
       const article = document.createElement("article");
       article.className = "articleMedia";
       /*Affiche moi une video, sinon on affiche une image*/
       if (video) {

        const videoContent = document.createElement("video");
        videoContent.className = "mediaImage";
        videoContent.src = mediaPictures+name+"/"+video;
        videoContent.setAttribute('onclick', "showMediaModal(this)");
        
        article.appendChild(videoContent); 

       } else {

        const img = document.createElement("img");
        img.className = "mediaImage";
        img.src = mediaPictures+name+"/"+image;
        img.setAttribute('onclick', "showMediaModal(this)")
       
        article.appendChild(img); 
          
       }

       const div = document.createElement("div");
       div.className = "displayTitleLikes";
       div.innerHTML = `
         
             <h3>${title}</h3>
             <div class= "display">
               <p class= "nombreDeLikeMedia">${likes}</p>
               <button class="likeButton" type="button" onclick="likeMedia()">♡</button>
             </div>        

           `
          
          article.appendChild(div);
     
          return article; 
        
     
   }
   return {name,title, likes, image, video, getMediaPhotographer};
}



            