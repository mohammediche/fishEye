const mediaModal = document.querySelector("#mediaModal");

/* show & hide media modal */
/*const showMediaModal= (element)=>{
    mediaModal.style.display = "block";
    // document.querySelector(".imageModal").src = element.src;
    const video = document.querySelector(".videoModal");
    const image = document.querySelector(".imageModal");

    console.log(video);
    if ( video.alt === element.alt ) {
        video.src = element.src;
        
    } else{
        image.src = element.src; 
    }
 
    // console.log(document.querySelector(".imageTest").src);

}*/
const hideMediaModal= ()=>{
    mediaModal.style.display = "none";

}
//
// const test = async ()=>{
//     const response = await fetch("/data/photographers.json");
//     const results = await response.json();
//     const {photographers, media} = results;
    
    
//     const filterMedia = media.filter((media)=>{       
//         return media.photographerId == id;
//     })
//     console.log(filterMedia);
// }
const showMediaModal = ()=>{
    const articleMedia = document.querySelectorAll(".articleMedia");
    
    for (let i = 0; i < articleMedia.length; i++) {
        let newIndex = i;  
        let clickedImageIndex;
        /** onclick image */   
        articleMedia[index].onclick = ()=>{
            clickedImageIndex = i;
            function preview(){
                let imageURL = articleMedia[newIndex].querySelector("img").src;
            }
        }
    }
}
/*window.onload = ()=>{
    const articleMedia = document.querySelectorAll(".articleMedia");
    console.log("hello people !");
     console.log(articleMedia);
    //  for (let index = 0; index < articleMedia.length; index++) {
    //     const element = articleMedia[index];
    //     return console.log(element);
        
    //  }
}*/



