const menu = [
  {
    id: 1,
    title: "country delight",
    category: "breakfast",
    price: 45,
    img: "./images/bf1.jpg",
    desc: `Fried Egg and Bread Platter served with coffee or tea`,
  },
  {
    id: 2,
    title: "egg attack",
    category: "breakfast",
    price: 65.0,
    img: "./images/bf2.jpg",
    desc: `Slice of Eggs on Cakes with avocado`,
  },
  {
    id: 3,
    title: "american classic",
    category: "breakfast",
    price: 90.0,
    img: "./images/bf3.jpg",
    desc: `Tomatoes With Egg with brown or white toast`,
  },
  {
    id: 4,
    title: "Poached Eggs Delight",
    category: "breakfast",
    price: 55.0,
    img: "./images/bf4.jpg",
    desc: `Orange Ceramic Devilled Egg Stand with brown or white toast`,
  },
  {
    id: 5,
    title: "pasta delight",
    category: "lunch",
    price: 85,
    img: "./images/lunch1.jpg",
    desc: `Pasta With Tomato Basil`,
  },
  {
    id: 6,
    title: "Burger Classic",
    category: "lunch",
    price: 65,
    img: "./images/item-5.jpeg",
    desc: `Double Cheese Burger with the oprion of chips and salad as an extra`,
  },
  {
    id: 7,
    title: "Steak attack",
    category: "lunch",
    price: 110,
    img: "./images/item-10.jpeg",
    desc: `bison steak`,
  },
  {
    id: 8,
    title: "Parsley in Green Ceramic",
    category: "lunch",
    price: 75,
    img: "./images/lunch2.jpg",
    desc: `Soft Boiled Egg, and Parsley in Green Ceramic Plate`,
  },
  {
    id: 9,
    title: "diner double",
    category: "lunch",
    price: 80,
    img: "./images/item-2.jpeg",
    desc: `Cheese burger burger served with chips and an option of green salad`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 165,
    img: "./images/item-10.jpeg",
    desc: `Farm style steak imported from Botsana`,
  },
  {
    id: 11,
    title: "Seafood Salad Special",
    category: "dinner",
    price: 113,
    img: "./images/dinner1.jpg",
    desc: `Fish Salad Dish`,
  },
  {
    id: 12,
    title: "Lamb Chop Special",
    category: "dinner",
    price: 155,
    img: "./images/dinner2.jpg",
    desc: `Lamb chop Served in Plate`,
  },

  {
    id: 13,
    title: "oreo dream",
    category: "Dessert",
    price: 39,
    img: "./images/d1.jpg",
    desc: `Sliced Cake on White Saucer`,
  },
  {
    id: 14,
    title: "Dessert buddy",
    category: "Dessert",
    price: 53,
    img: "./images/d2.jpg",
    desc: `Baked Bread on White Plate`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">R${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

//Add category items
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
