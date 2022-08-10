import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  api.modifyClass("component:topic-list-item", {
    pluginId: "discourse-air",
    expandPinned: true,
  });
});
let customCategoryCard = document.getElementsByClassName('above-discovery-categories-outlet')[0];
if (!customCategoryCard){
  customCategoryCard.parentElement.classList.add('list-area-section');
}