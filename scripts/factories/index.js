 function photographerFactory(data) {
    const { id,price,tagline,city,country,name, portrait } = data;

    const picture = `assets/images/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        let template = `   
        <a href = "./photographer.html?key=${id}" class = "centerImageLink">  
           <img class="imagePhotographer" src = "${picture}">
           <h2 class="nameOfPhotographer">${name}</h2>
        </a>  
           <h3 class="location">${city+ ", "  +country}</h3>
           <strong>${tagline}</strong>
           <span class = "prixParJour">${price}€/jour</span>
        `;
        article.innerHTML = template;
        return article;
    }
    return { id, price,tagline, city, country, name, picture, getUserCardDOM }
    
}
