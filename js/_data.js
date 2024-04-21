import { Products1 } from "./_const.js";

export const prodData = JSON.parse(localStorage.getItem(Products1)) || [
  {
    id: "1",
    name: "Banana",
    quantity: 15,
    unit: "kg",
    price: 19000,
    img: "https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg",
  },
  {
    id: "2",
    name: "Sut",
    quantity: 25,
    unit: "litr",
    price: 9000,
    img: "https://media.istockphoto.com/id/535489242/photo/pouring-milk-in-the-glass-on-the-background-of-nature.jpg?s=612x612&w=0&k=20&c=bqBubtMFs_kv9z0OZVLunl3NFTb_XAVKiw8v1hO1T80=",
  },
  {
    id: "3",
    name: "Ruchka",
    quantity: 125,
    unit: "dona",
    price: 5000,
    img: "https://www.skrepkaexpo.uz/image/cache/catalog/tovar/rossija2020%E2%84%962/ruchki/ruchka-roller183001-1200x800.jpg",
  },
  {
    id: "4",
    name: "Ruchka",
    quantity: 125,
    unit: "dona",
    price: 5000,
    img: "https://www.skrepkaexpo.uz/image/cache/catalog/tovar/rossija2020%E2%84%962/ruchki/ruchka-roller183001-1200x800.jpg",
  },
];

console.log(prodData);
