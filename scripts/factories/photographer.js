function photographerFactory(photographers) {
    const { price,tagline,city,country,name, portrait } = photographers;

    // const picture = `assets/images/Sample Photos/Photographers ID Photos/${portrait}`;
    const profilPictures = "assets/images/Sample Photos/Photographers ID Photos/";

    function getDataPhotographer() {
        const div = document.createElement("div");
        div.className = "info-photograph-header";
        let template = `
    
            <div class="aboutPhotographer">
              <h1>${name}</h1>
              <h2 class="location">${city+ ", "  +country}</h2>
              <strong>${tagline}</strong>
            </div>  
            
          <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img class= "imagePhotographer" src= "${profilPictures+portrait}" alt="${name}">

            <aside>
            <span>230 404♥︎</span>
            <span>${price}€/jour</span>
            </aside>

      `
        div.innerHTML = template;
        return div;
    }
    return { price,tagline, city, country, name, portrait, getDataPhotographer }
    
}