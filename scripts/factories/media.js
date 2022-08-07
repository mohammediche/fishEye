const mediaFactory = (media, nameOfPhotographer)=>{
   const { title, likes, image, video, id } = media;
  


   const name = nameOfPhotographer;
   const mediaPictures = "assets/images/Sample Photos/";

   const afficheMediaPhotographer = ()=>{
       const article = document.createElement("article");
       article.className = "articleMedia";
       /*Affiche moi une video, sinon on affiche une image*/
       if (video) {

        const videoContent = document.createElement("video");
        videoContent.className = "mediaImage";
        videoContent.src = mediaPictures+name+"/"+video;
        videoContent.setAttribute("alt", title);
        videoContent.setAttribute("onclick","showMediaModal(this)");
        
        article.appendChild(videoContent); 

       } else {

        const img = document.createElement("img");
        img.className = "mediaImage";
        img.src = mediaPictures+name+"/"+image;
        img.setAttribute("alt", title);
        img.setAttribute("onclick", "showMediaModal(this)");
       
        article.appendChild(img); 
          
       }

       const div = document.createElement("div");
       div.className = "displayTitleLikes";
       div.innerHTML = `
         
             <h3>${title}</h3>
             <div class= "display">
               <button class="likeButton" id=${id} type="button" onclick= "likeMedia(${id})">${likes}</button>
             </div>        

           `
          
          article.appendChild(div);
     
          return article; 
        
     
   }
   return {name,title, likes, image, video, afficheMediaPhotographer};
}



            