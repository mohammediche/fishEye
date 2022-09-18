const idPhotographer = new URLSearchParams(window.location.search).get("key");
let selected = document.querySelector(".value");
selected.innerHTML = "Popularité";
/** permet d'ouvrir et fermer le select tri **/
const openSelectTri = () => {
  document.querySelector(".optList").classList.toggle("hidden");
  document.querySelector(".select").classList.toggle("active");
};
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     document.querySelector(".optList").classList.toggle("hidden");
//     document.querySelector(".select").classList.toggle("active");
//   }
// });

const menuOption = document.querySelectorAll(".option");

for (const option of menuOption) {
  option.addEventListener("click", async (e) => {
    let valueSelected = e.target.innerHTML;
    const media = await getMediaByPhotographerId(idPhotographer, valueSelected);
    selected.innerHTML = e.target.innerHTML;
    return media;
  });
  /*** quand on selectionne une option avec le bouton Enter */
  option.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let valueSelected = e.target.innerHTML;
      const media = await getMediaByPhotographerId(
        idPhotographer,
        valueSelected
      );
      selected.innerHTML = e.target.innerHTML;
      document.querySelector(".optList").classList.add("hidden");
      return media;
    }
  });
}
