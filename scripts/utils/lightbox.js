const mediaModal = document.querySelector("#mediaModal");

/* show & hide media modal */
const showMediaModal= (element)=>{
    mediaModal.style.display = "block";
    // document.querySelector(".imageModal").src = element.src;
    const video = document.querySelector(".test");
    const image = document.querySelector(".imageModal");
    if ( video ) {
        video.src = element.src;
        
    } else if(image){
        image.src = element.src; 
    }
    console.log(element.src);

    // essayer le if else ici
    // console.log(document.querySelector(".imageTest").src);

}
const hideMediaModal= ()=>{
    mediaModal.style.display = "none";

}
