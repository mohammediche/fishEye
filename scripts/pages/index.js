    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        
       const response = await fetch("/data/FishEyeData.json");
       const results = await response.json();
       
       return results;

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
    
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
    