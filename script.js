const chocolates = {
  chocolate1: {
    name: "Chocolate 1",
    price: 2.5,
    imageSrc: "./IMAGES/chocolate1.png",
  },
  chocolate2: {
    name: "Chocolate 2",
    price: 3.0,
    imageSrc: "./IMAGES/chocolate2.png",
  },
  chocolate3: {
    name: "Chocolate 3",
    price: 2.5,
    imageSrc: "./IMAGES/chocolate3.png",
  },
  chocolate4: {
    name: "Chocolate 4",
    price: 3.5,
    imageSrc: "./IMAGES/chocolate4.png",
  },
  chocolate5: {
    name: "Chocolate 5",
    price: 4.5,
    imageSrc: "./IMAGES/chocolate5.png",
  },
  chocolate6: {
    name: "Chocolate 6",
    price: 2.0,
    imageSrc: "./IMAGES/chocolate6.png",
  },
  chocolate7: {
    name: "Chocolate 7",
    price: 1.5,
    imageSrc: "./IMAGES/chocolate7.png",
  },
  chocolate8: {
    name: "Chocolate 8",
    price: 8.5,
    imageSrc: "./IMAGES/chocolate8.png",
  },
  chocolate9: {
    name: "Chocolate 9",
    price: 5.5,
    imageSrc: "./IMAGES/chocolate9.png",
  },
  chocolate10: {
    name: "Chocolate 10",
    price: 6.5,
    imageSrc: "./IMAGES/chocolate10.png",
  },
  
};


let cart = [];

function addToCart(chocolateId) {
  if (cart.length >= 8) {
    alert("You can only select up to 8 chocolates.");
    return;
  }

  const chocolate = { ...chocolates[chocolateId] }; 
  cart.push(chocolate);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((chocolate, index) => {
    const listItem = document.createElement("li");
    const chocolateImage = document.createElement("img");
    chocolateImage.src = chocolate.imageSrc; 
    chocolateImage.alt = chocolate.name;
    chocolateImage.classList.add("chocolate-image"); 
    listItem.appendChild(chocolateImage);
    cartItems.appendChild(listItem);
    totalPrice += chocolate.price;

    const angle = (index + 1) * 5;
    const distance = 20 + index * 5; 
    const radians = (angle * Math.PI) / 180;
    const x = distance * Math.cos(radians);
    const y = distance * Math.sin(radians);
    listItem.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
  });

  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}
