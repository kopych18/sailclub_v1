let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let preview of previews) {
    preview.onclick = function (evt) {
      evt.preventDefault();
  
      let currentActive = document.querySelector(".preview-list .active-item");
      currentActive.classList.remove("active-item");
      preview.classList.add("active-item");
  
      activePhoto.src = preview.href;
    };
}