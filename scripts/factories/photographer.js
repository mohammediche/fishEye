function photographerFactory(data) {
    const { price,tagline,city,country,name, portrait } = data;
    console.log(data);

    const picture = `assets/images/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( "h3" );
        const strong = document.createElement( "strong" );
        const span = document.createElement( "span" );
        img.setAttribute("src", picture)
        h2.textContent = name;
        h3.textContent =[ city," " + country]
        strong.textContent = tagline;
        span.className = "prixParJour"
        span.textContent = price +"€/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(strong);
        article.appendChild(span);
        return (article);
    }
    return { price,tagline, city, country, name, picture, getUserCardDOM }
}
// const main = document.querySelector(".photographer_section");
// const photographerFactory= (data)=>{
//     console.log(data);
//     const picture = `assets/images/Sample Photos/Photographers ID Photos/${data.portrait}`;
//     console.log(picture);
    
//     const getUserCardDOM = ()=>{
//         let template = `
//         <article>       
//            <img src = ${picture}>
//            <h2>${data.name}</h2>
//            <h3>${data.city, " " +data.country}</h3>
//            <strong>${data.tagline}</strong>
//            <span class = "prixParJour">${data.price}"€/jour"</span>
//         </article>
//         `;
//         main.innerHTML = template;
//     }
//     getUserCardDOM();
// }
