const deliveryDate = new Date();
const card_display = document.getElementById("card_display");
const count = document.getElementById("count");

const delivery_time = document.getElementById("delivery_time");
const name_sort = document.getElementById("name_sort");
const cost = document.getElementById("cost");
const stars= document.getElementsByClassName("stars")
const ratings = document.getElementById("ratings");

// this is the shoe data which we will put on the DOM
const products = [
  {
    img: "black_shoe.jpg",
    name: "Shoe Name 11",
    price: 2350,
    rating: 5.0,
    delivery:new Date ("3 Feb 2022"),
},
{
    img: "blue_shoe.jpg",
    name: "Shoe Name 22",
    price: 1350,
    rating: 5.0,
    delivery:new Date ("6 Feb 2022"),
},
{
    img: "white_shoe.jpg",
    name: "Shoe Name 43",
    price: 4550,
    rating: 4.0,
    delivery:new Date("3 Feb 2022"),
},
{
    img: "black_shoe.jpg",
    name: "Shoe Name 48",
    price: 9950,
    rating: 3.0,
    delivery: new Date("3 Feb 2022"),
},
{
    img: "blue_shoe.jpg",
    name: "Shoe Name 52",
    price: 350,
    rating: 2.0,
    delivery: new Date("5 Feb 2022"),
},
{
    img: "white_shoe.jpg",
    name: "Shoe Name 13",
    price: 4650,
    rating: 3.0,
    delivery: new Date ("5 Feb 2022"),
},
{
    img: "black_shoe.jpg",
    name: "Shoe Name 11",
    price: 2350,
    rating: 4.0,
    delivery: new Date("3 Feb 2022"),
},
{
    img: "blue_shoe.jpg",
    name: "Shoe Name 22",
    price: 1350,
    rating: 1.0,
    delivery: new Date("4 Feb 2022"),
},
{
    img: "white_shoe.jpg",
    name: "Shoe Name 43",
    price: 4550,
    rating: 2.0,
    delivery: new Date("3 Feb 2022"),
}
];

// function for generating card to show product
const productcard = (element) => {
  return `
  <div class="card m-3 mx-4 p-1 border-0" style="width: 20rem;">
  <img src="./media/${
    element.img
  }" class="card-img-top" alt="shoe image" height="250px">
  
  <div class="card-body">

  <hr class="line" style="width:25%; size:5px; margin-left:90px">

      <div class="d-flex justify-content-between align-items-center">           
          <h5 class="card-title fw-bolder">${element.name}</h5>
          <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
          <span class="fa fa-star checked mx-2 ">${
                element.rating.toFixed(1)
              }</span>
              </span>
      </div>
    
      <h4 class="fs-1 fw-bold">&#8377;${element.price}</h4>
    <p class="card-text">Delivery by: ${element.delivery.toDateString()}</p>
  </div>

</div>`;
};

// this will handle the sorting in the name_sortbatical order
name_sort.addEventListener("click", () => {
  console.log("click on name_sort");
  card_display.innerHTML = "";
  const alphaSort = (first, second) => {
    if (first.name > second.name) {
      return 1;
    } else if (first.name < second.name) {
      return -1;
    } else {
      return 0;
    }
  };

  count.innerHTML = 9;
  products.sort(alphaSort).forEach((element) => {
    card_display.innerHTML += productcard(element);
  });
});

//this will handle the sorting in pricing (high to low)
cost.addEventListener("click", () => {
  console.log("click on price");
  card_display.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseInt(first.price) > parseInt(second.price)) {
      return -1;
    } else if (parseInt(first.price) < parseInt(second.price)) {
      return 1;
    } else {
      return 0;
    }
  };

  count.innerHTML = 9;
  products.sort(priceSort).forEach((element) => {
    card_display.innerHTML += productcard(element);
  });
});

//this will handle the sorting according to delivery time
delivery_time.addEventListener("click", () => {
  card_display.innerHTML = "";

  const deliverySort = (first, second) => {
    if (first.delivery - deliveryDate > second.delivery - deliveryDate) {
      return 1;
    } else if (
      first.delivery - deliveryDate <
      second.delivery - deliveryDate
    ) {
      return -1;
    } else {
      return 0;
    }
  };

  count.innerHTML = 9;
  products.sort(deliverySort).forEach((element) => {
    card_display.innerHTML += productcard(element);
  });
});

// this will handle the click event on the filters
Array.from(stars).forEach((element) => {
  element.addEventListener("click", (e) => {
    card_display.innerHTML = "";
    let i = 0;
    const targetRank = parseInt(e.target.innerHTML.split("")[0]);

    products.forEach((element) => {
      if (parseInt(element.rating) == targetRank) {
        card_display.innerHTML += productcard(element);
        i += 1;
      }
    });

    count.innerHTML = i;
  });
});

// this will populate the card_display element with product
products.forEach((element) => {
  card_display.innerHTML += productcard(element);
});
  
  $('ul.dropdown-menu > li')
          .click(function (e) {
      $('ul.dropdown-menu > li')
          .removeClass('active');
      $(this).addClass('active');
  });
