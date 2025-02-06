//Creating arrays of images of each color of each product to use to access later
//by index
function productImgs(id) {
    switch(id) {
        case "mug":
            return ["Mugs/MugWhite.jpg", "Mugs/MugCream.jpg", "Mugs/MugYellow.jpg"];
        case "tumbler":
            return ["Tumbler/TumblerBlack.jpg", "Tumbler/TumblerCream.jpg", "Tumbler/TumblerGreen.jpg"];
        case "cap":
            return ["Cap/CapWhite.jpg", "Cap/CapCream.jpg", "Cap/CapBlack.jpg"];
        case "bhat":
            return ["BucketHat/BucketHatWhite.jpg", "BucketHat/BucketHatCream.jpg", "BucketHat/BucketHatBlack.jpg"];
        case "notebook":
            return ["Notebook/NotebookBlack.jpg", "Notebook/NotebookCream.jpg", "Notebook/NotebookGreen.jpg"];
        default:
            return [];
    }
}

//Creating arrays of alts of the images of each color of each product to use to access later
//by index
function productAlts(id) {
    switch(id) {
        case "mug":
            return ["White Mug", "Cream Mug", "Yellow Mug"];
        case "tumbler":
            return ["Black Tumbler", "Cream Tumbler", "Green Tumbler"];
        case "cap":
            return ["White Cap", "Cream Cap", "Black Cap"];
        case "bhat":
            return ["White Bucket Hat", "Cream Bucket Hat", "Black Bucket Hat"];
        case "notebook":
            return ["Black Notebook", "Cream Notebook", "Green Notebook"];
        default:
            return [];
    }
}

//For the id of the product and the index passed, it sets the image src to the
//respective image and alt
// For example ('mug', 1) would set the mug image to the Cream Mug according to the above arrays set
function changeColor(id, index) {
    let img = document.getElementById(id);
    let imgArray = productImgs(id);
    let altArray = productAlts(id);

    img.src = imgArray[index];
    img.alt = altArray[index];
}

let donationCart = []; //Setting donations as empty
const donationsContainer = document.getElementById("donation-cart-items"); //donation div captured
let shopCart = []; //Setting merch array as empty
const shopContainer = document.getElementById("shop-cart-items"); //merch div captured
const cartTotalContainer = document.getElementById("cart-total"); //capturing section which displays total of the items
let cartTotal = 0; //setting cart total value to 0

//Using this function to capture the amount of the donation and pass it on
//to update the cart
function donationAddToCart(amount) {
    donationCart.push(amount);
    donationUpdateCart();
}

//This function captures the amount of the custom donation made
//If the donation is a valid number and greater than 0 then it is valid
function donationAddCustomAmount() {
    let customAmount = parseInt(document.getElementById('custom-donation').value);
    if (!isNaN(customAmount) && customAmount > 0) {
        donationAddToCart(customAmount);
    }
}

//If donation is valid, it updates the cart with the donation item along with a
//remove option
function donationUpdateCart() {
    let description = "";
    for (let i = 0; i < donationCart.length; i++) {
        let amount = donationCart[i];
        description += "<div class='cart-item'><span>Donation: Rs. " + amount + " </span><button class=remove-button onclick='donationRemoveFromCart(" + i + ")'>X</button></div>";
    }
    donationsContainer.innerHTML = description;
    getTotal();
}

//When a remove option is assigned, an index is assigned as well according to the
//function above
//When the remove is clicked it removes the item from the donationCart array and updates the
//donation div
function donationRemoveFromCart(index) {
    donationCart.splice(index, 1);
    donationUpdateCart();
}

//This function reads the id of the item, id of the quantity selected by the user and the price of the product
//Example: ("mug", "mug-quantity", 500)
//Then it captures the alt value (which gives a small description), the quantity and the price
//and pushes it into the shopCart array, as an array (array in an array)
//Then it uses those details to update the cart
function shopAddToCart(item, quantity, price) {
    let detail = document.getElementById(item).alt;
    let number = document.getElementById(quantity).value;
    shopCart.push([detail, number, price]);
    shopUpdateCart();
}

//Using the above details, it updates the merch div
//As the donations, the details of the merch will be displayed with a remove option
function shopUpdateCart() {
    let description = "";
    for (let i = 0; i < shopCart.length; i++) {
        let amount = shopCart[i][1] * shopCart[i][2];
        description += "<div class='cart-item'><span>" + shopCart[i][0] + " x" + shopCart[i][1] + ": Rs. " + amount + " </span><button class=remove-button onclick='shopRemoveFromCart(" + i + ")'>X</button></div>";
    }
    shopContainer.innerHTML = description;
    getTotal();
}

//Same as the donations, when remove button is clicked, the merch item will be
//removed from the array
function shopRemoveFromCart(index) {
    shopCart.splice(index, 1);
    shopUpdateCart();
}

//This function calculates the total of both the donations and merch and diaplays the final amount
function getTotal() {
    let donationTotal = 0;
    for (let i = 0; i < donationCart.length; i++) {
        donationTotal += donationCart[i];
    }
    
    let shopTotal = 0;
    for (let i = 0; i < shopCart.length; i++) {
        shopTotal += shopCart[i][1] * shopCart[i][2];
    }

    cartTotal = donationTotal + shopTotal;
    cartTotalContainer.innerHTML = "Total: Rs. " + cartTotal;
}

//The checkout function checks whether there are items or not
//If there are no items and alert message is printed
//If there are items, a confirm message is printed
//If the answer of the user is OK, then it will proceed to checkout
//Else it will not proceed and the user can keep on editing his items in the cart
function checkout() {
    if (donationCart.length == 0 && shopCart.length == 0){
        alert('No items are added!');
    }
    else {
        let answer = confirm("Are you sure you want to proceed...");
        if (answer == true) {
            window.location.href = "shopvalidation.html";
        }
    }
}

//Once clear cart is clicked, it resets to the default cart by
//Emptying the donation and merch arrays and go through each of
//the updateCart functions
function clearCart() {
    donationCart = [];
    shopCart = [];
    donationUpdateCart();
    shopUpdateCart();
}