let selectedProduct="";

function showDetails(size){
  selectedProduct=size;
  document.getElementById("productTitle").innerText="Nalangu Maavu " + size;
  document.getElementById("popup").style.display="flex";
}

function closePopup(){
  document.getElementById("popup").style.display="none";
}

function buyNow(event,size){
  event.stopPropagation();
  let phone="918220890588";
  let msg="Hi, I want " + size + " Nalangu Maavu";
  window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(msg));
}

function buyNowDirect(){
  let phone="918220890588";
  let msg="Hi, I want " + selectedProduct + " Nalangu Maavu";
  window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(msg));
}

/* 🔍 SEARCH FUNCTION ADD */
document.getElementById("searchInput").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(function(product){
    let text = product.innerText.toLowerCase();

    if(text.includes(value)){
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
function searchProduct(){
  let value = document.getElementById("searchInput").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(function(product){
    let text = product.innerText.toLowerCase();

    if(text.includes(value)){
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}