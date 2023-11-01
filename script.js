// Menu arry of objects
const menu = [
    {
        num: 1,
        name: "'Speak Now' Pastry",
        category: "breakfast",
        price: 13.13,
        image: "images/speak-now-pastry.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 2,
        name: "'You Are In Love' Toast",
        category: "breakfast",
        price: 13.13,
        image: "images/youre-in-love-toast.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 3,
        name: "'Innocent' Lunchbox",
        category: "lunch",
        price: 13.13,
        image: "images/innocent-lunchbox.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 4,
        name: "'22' Breakfast",
        category: "breakfast",
        price: 13.13,
        image: "images/22-breakfast.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 5,
        name: "'Invisible String' Lunch",
        category: "lunch",
        price: 13.13,
        image: "images/invisible-string-lunch.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 6,
        name: "'Breakfast At Midnight'",
        category: "breakfast",
        price: 13.13,
        image: "images/breakfast-at-midnight.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 7,
        name: "'Red' Velvet Pancakes",
        category: "breakfast",
        price: 13.13,
        image: "images/red-velvet-pancakes.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 8,
        name: "'On A Wednesday' Special",
        category: "dinner",
        price: 13.13,
        image: "images/on-a-wednesday-special.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 9,
        name: "'London Boy' Salad",
        category: "dinner",
        price: 13.13,
        image: "images/london-boy-salad.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 10,
        name: "'...Bready For It?'",
        category: "breakfast",
        price: 13.13,
        image: "images/bready-for-it.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 11,
        name: "'The Lucky One' Toast",
        category: "breakfast",
        price: 13.13,
        image: "images/the-lucky-one-toast.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 12,
        name: "'Bejeweled' Savoury Crepes",
        category: "dinner",
        price: 13.13,
        image: "images/bejeweled-savoury-crepes.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 13,
        name: "'The 1' Dinner Course",
        category: "dinner",
        price: 13.13,
        image: "images/the-1-dinner-course.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 14,
        name: "'Anti-Hero' Dinner Special",
        category: "dinner",
        price: 13.13,
        image: "images/anti-hero-dinner-special.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 15,
        name: "'Lavender Haze' Lunch Bento",
        category: "lunch",
        price: 13.13,
        image: "images/lavender-haze-lunch-bento.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 16,
        name: "'All Too Well' Eggs and Hash",
        category: "breakfast",
        price: 13.13,
        image: "images/all-too-well-eggs.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 17,
        name: "'Folklore' Green Tea",
        category: "cafe",
        price: 13.13,
        image: "images/folklore-green-tea.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 18,
        name: "'Steak It Off'",
        category: "dinner",
        price: 13.13,
        image: "images/steak-it-off.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 19,
        name: "'Vigilante Shrimp' Salad",
        category: "lunch",
        price: 13.13,
        image: "images/vigilante-shrimp-salad.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 20,
        name: "'Ours' Lunch Scramble",
        category: "lunch",
        price: 13.13,
        image: "images/ours-lunch-scramble.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 21,
        name: "'Wildest Greens' Salad",
        category: "lunch",
        price: 13.13,
        image: "images/wildest-greens-salad.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 22,
        name: "Nashville Chicken Wings",
        category: "dinner",
        price: 13.13,
        image: "images/nashville-chicken-wings.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 23,
        name: "'Cornelia Street' Tacos",
        category: "lunch",
        price: 13.13,
        image: "images/cornelia-street-tacos.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 24,
        name: "'London Boy' Tea",
        category: "cafe",
        price: 13.13,
        image: "images/london-boy-tea.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 25,
        name: "'seven' Sweet Tea",
        category: "cafe",
        price: 13.13,
        image: "images/seven-sweet-tea.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 26,
        name: "'Begin Again' Coffee",
        category: "cafe",
        price: 13.13,
        image: "images/begin-again-coffee.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 27,
        name: "'The Best Day' Spice Latte",
        category: "cafe",
        price: 13.13,
        image: "images/the-best-day-spice-latte.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 28,
        name: "'Lavender' White Mocha",
        category: "'breakfast'",
        price: 13.13,
        image: "images/lavender-white-mocha.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 29,
        name: "'evermore' Chai Latte",
        category: "cafe",
        price: 13.13,
        image: "images/evermore-chai-latte.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 30,
        name: "'Holy Ground' Coffee",
        category: "cafe",
        price: 13.13,
        image: "images/holy-ground-coffee.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 31,
        name: "'All Too Well' Maple Latte",
        category: "cafe",
        price: 13.13,
        image: "images/all-too-well-maple-latte.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 32,
        name: "'Forever Winter' Peppermint",
        category: "cafe",
        price: 13.13,
        image: "images/forever-winter-peppermint-coffee.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 33,
        name: "'Champagne Problems' Drink",
        category: "bar",
        price: 13.13,
        image: "images/champagne-problems-drink.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 34,
        name: "'Welcome To New York' Manhattan",
        category: "bar",
        price: 13.13,
        image: "images/welcome-to-new-york-manhattan.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 35,
        name: "'Bad Bloody' Mary",
        category: "bar",
        price: 13.13,
        image: "images/bad-bloody-mary.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 36,
        name: "'New Rumantics' ",
        category: "bar",
        price: 13.13,
        image: "images/new-rumantics.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 37,
        name: "'Nineteen Eighty Lime' Margarita",
        category: "bar",
        price: 13.13,
        image: "images/nineteen-eighty-lime-margarita.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 38,
        name: "'London Boy' Gin and Tonic",
        category: "bar",
        price: 13.13,
        image: "images/london-boy-gin-and-tonic.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 39,
        name: "'Starlight' Cider",
        category: "bar",
        price: 13.13,
        image: "images/starlight-cider.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 40,
        name: "'Shake It Off' Cocktail",
        category: "bar",
        price: 13.13,
        image: "images/shake-it-off-cocktail.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        num: 41,
        name: "'Back to Decemburger'",
        category: "dinner",
        price: 13.13,
        image: "images/back-to-decemburger.jpeg",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
]

const menuMain = document.querySelector(".menu-main");
const container = document.querySelector(".menu-filters");

window.onload = function(){
    document.getElementById("defaultButton").click();
    document.getElementById("defaultHome").click();
}
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
  });

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){

        return `<div class="menu-container foodbox ${item.category}">
                            <div class="item-photo">
                                <img src=${item.image} alt=${item.name} height="auto" width="100%">
                            </div>
                            <div class="item-info">
                                <div class="iteminfo-top">
                                    <div class="item-name">${item.name}</div>
                                    <div class="item-price">£ ${item.price}</div>
                                </div>
                                <div class="iteminfo-bottom">
                                    <div class="item-description">${item.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>`
    
    })
    displayMenu = displayMenu.join("");
    menuMain.innerHTML = displayMenu;
};

const filterButtons = container.querySelectorAll(".filter-button");
// filter items

filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.category;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
});

let btnContainer = document.getElementById("button-container");
let btns = btnContainer.getElementsByClassName("filter-button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}