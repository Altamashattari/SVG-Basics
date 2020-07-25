var btns = document.querySelectorAll(".buttons button");
var cat = document.getElementsByClassName('cat')[0];

for(let i=0; i< btns.length; i++) {
  btns[i].addEventListener("click", manageCatClasses);
}

function manageCatClasses ()  {
  const dataAdd = this.getAttribute("data-add");
  if(dataAdd){
    cat.classList.add(dataAdd);
  }
  const dataRemove = this.getAttribute("data-remove");
  if(dataRemove){
    cat.classList.remove(dataRemove);
  }
}