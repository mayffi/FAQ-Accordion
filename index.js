const accordion = document.getElementsByClassName("content-container");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active"); /*'this' references the object calling 
    the function which is the accordion*/
  });
}
