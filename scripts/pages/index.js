async function getPhotographers() {

       const response = await fetch("/data/photographers.json");
       const results = await response.json();
       
       return results;
    }

     function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            console.log(photographer);
    
            const photographerModel = photographerFactory(photographer);
            const templatePhotographer = photographerModel.getUserCardDOM();
            photographersSection.appendChild(templatePhotographer);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    