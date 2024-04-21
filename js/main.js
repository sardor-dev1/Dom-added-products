import { things } from "./class.js";
import { Products1 } from "./_const.js";
import { prodData } from "./_data.js";

const inpImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvBuTy5cAtixsEhBsI7_DQzQWi1NrcSnX1UptotwPBA&s";

let products = document.querySelector(".products");
let addBtn = document.querySelector(".products__add-cards");
let getCards = document.querySelector(".products__cards");
let modal = document.querySelector(".modal");
let productValue = document.querySelector(".submit-btn");
let cancel = document.querySelector(".modal__del--btn");
let deleteCard = document.querySelector(".product__card__delete");
let productCard = document.querySelector(".products__card");


function mapProduct(products) {
  let productAdd = "";

  products.forEach((product) => {
    productAdd += `
        <div class="products__card">
                    <div class="products__card__img">
                        <img src="${product.img}" alt="${product.name} image">
                    </div>
                    <div class="products__card__info">
                        <h2 class="products__card__title">Name:${product.name}</h2>
                        <p class="products__card__desc">Quantity:${product.quantity}</p>
                        <p class="products__card__desc">Unit:${product.unit}</p>
                        <p class="products__card__desc">Price:${product.price}</p>
                        <div class="products__card__btns">
                            <button class="products__btn" name="delete" data-id="${product.id}">Delete</button>
                        </div>
                    </div>
                </div>
        `;
    getCards.innerHTML = productAdd;
  });
}

addBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
});

mapProduct(prodData);

productValue.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let quantity = document.querySelector("#quantity").value;
  let unit = document.querySelector(".unit").value;
  let price = document.querySelector("#price").value;
  let img = document.querySelector("#img").value;

  let newProduct = {
    quantity: quantity,
    unit: unit,
    img: img,
    price: price,
    name: name,
  };
  prodData.push(newProduct);
  localStorage.setItem(Products1, JSON.stringify(prodData));

  mapProduct(prodData);
  modal.style.display = "none"
});

const deleteBtn = (id) => {
  let index = prodData.findIndex((u) => u.id === id);
  prodData.splice(index, 1);
  mapProduct(prodData);
};

products.addEventListener("click", (e) => {
  if (e.target.name === "delete") {
    deleteBtn(e.target.dataset.id);
  } else if (e.target.name === "edit") {
  }
});


