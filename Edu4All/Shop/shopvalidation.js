function validateForm(event) {
    event.preventDefault();
    //preventing the default submit method of a form from happening
    //Capturing the data using the values of that perticular id and storing it in variables
    var name = document.getElementById('card-name').value;
    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var country = document.getElementById('country').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    //regex patterns for each of the variables to check for validation
    var namePattern = /^[a-zA-Z\s]+$/; //checks whether the name only has letters and whitespace characters
    var cardNumberPattern = /^\d{16}$/; //checks whether it is a 16 digit number
    var expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; //checks whether it is exactly MM/YY format
    var cvvPattern = /^\d{3}$/; //checks whether it is a 3 digit number
    var addressPattern = /^[a-zA-Z0-9\s,.'-]{3,}$/; //checks whether 3 or more characters include letters, digits, spaces, commas, periods, apostrophes and hyphens
    var cityPattern = /^[a-zA-Z\s]+$/; //Checks whether input only includes letters and white spaces
    var statePattern = /^[a-zA-Z\s]+$/; //Checks whether input only includes letters and white spaces
    var zipPattern = /^\d{5}$/; //checks whether it is a 5 digit number
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //checks whether email is valid
    var phonePattern = /^\d{10}$/; //checks whether it is a 10 digit number

    //Checking all input fields and select field one by one and exits before reacing
    //the if ladder if one of the results turns true
    if (!name.match(namePattern)) {
        alert("Name on Card must contain only letters and spaces!");
        return;
    }
    if (!cardNumber.match(cardNumberPattern)) {
        alert("Card Number must be 16 digits!");
        return;
    }
    if (!expiryDate.match(expiryDatePattern)) {
        alert("Expiry Date must be in MM/YY format!");
        return;
    }
    if (!cvv.match(cvvPattern)) {
        alert("CVV must be 3 digits!");
        return;
    }
    if (!address.match(addressPattern)) {
        alert("Address is required and should be valid!");
        return;
    }
    if (!city.match(cityPattern)) {
        alert("City must contain only letters and spaces!");
        return;
    }
    if (!state.match(statePattern)) {
        alert("State/Province must contain only letters and spaces!");
        return;
    }
    if (!zip.match(zipPattern)) {
        alert("Zip/Postal Code must contain 5 digits!");
        return;
    }
    if (country === '') {
        alert("Please select a country");
        return;
    }
    if (!email.match(emailPattern)) {
        alert("Email must be a valid email address!");
        return;
    }
    if (!phone.match(phonePattern)) {
        alert("Phone Number must contain 10 digits!");
        return;
    }

    //If none of them tell true...
    alert("Thank you for your purchase!\nYour support to this cause is highly appreciated!");
    window.location.href = "shop.html"; //Goes back to the shop
}