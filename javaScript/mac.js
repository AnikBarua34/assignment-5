
// function 1 getProductPrice
function getProductPrice(element, price) {
    const elementPrice = document.getElementById(element + '-ammount');
    elementPrice.innerText = price;
}

// function 2 getTotalPrice
function getTotalPrice(element) {
    const oldCost = document.getElementById(element + '-ammount');
    const newCost = parseInt(oldCost.innerText);
    return newCost;
}

// function 3 calculateTotalPrice
function calculateTotalPrice(element) {
    const oldTotalPrice = document.getElementById('total-price');
    const newTotalPrice = parseInt(oldTotalPrice.innerText);
    const totalprice = getTotalPrice(element) + newTotalPrice;
    oldTotalPrice.innerText = totalprice;
}
// function 4 finalTotalPrice
function finalTotalPrice(element) {
    const oldTotalPrice = document.getElementById('final-total-price');
    const newTotalPrice = parseInt(oldTotalPrice.innerText);
    const totalprice = getTotalPrice(element) + newTotalPrice;
    oldTotalPrice.innerText = totalprice;
}
// function 5  Apply Promo Code

function getDiscount() {
    const promoInputField = document.getElementById('input');
    const finalTotalPrice = document.getElementById('final-total-price');
    const totalPrice = document.getElementById('total-price');
    const discount = parseInt(totalPrice.innerHTML) / 100 * 20;


    if (promoInputField.value == 'stevekaku') {
        const totalPriceFinalPromo = parseInt(totalPrice.innerHTML) - discount;
        finalTotalPrice.innerHTML = totalPriceFinalPromo;
    }

    else {
        alert("Enter 'Valid Code' For 20% discount");
    }
    promoInputField.value = '';
}


// BUtton Sections 
// Memory Section 16 GB

document.getElementById('16gb').addEventListener('click', function () {
    getProductPrice('memory', 180);

    calculateTotalPrice('memory');

    finalTotalPrice('memory');
})
// Memory Section 8 Gb
document.getElementById('8gb').addEventListener('click', function () {

    getProductPrice('memory', 00);

    finalTotalPrice('memory');


})
// Storage  section 256 SSD
document.getElementById('256').addEventListener('click', function () {

    getProductPrice('storage', 00);

    finalTotalPrice('storage');

})
// Storage  section 512 SSD
document.getElementById('512').addEventListener('click', function () {

    getProductPrice('storage', 100);

    calculateTotalPrice('storage');

    finalTotalPrice('storage');
})
// Storage  section 1 TB
document.getElementById('1tb').addEventListener('click', function () {

    getProductPrice('storage', 180);

    calculateTotalPrice('storage');

    finalTotalPrice('storage');
})

// Delivery Section 
document.getElementById('aug-25').addEventListener('click', function () {

    getProductPrice('delivery', 00);

})
document.getElementById('aug-21').addEventListener('click', function () {

    getProductPrice('delivery', 20);

    calculateTotalPrice('delivery');

    finalTotalPrice('delivery');
})

// Promo Code Section 
document.getElementById('apply-btn').addEventListener('click', function () {

    getDiscount();
})
