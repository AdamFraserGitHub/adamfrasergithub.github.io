var numSellersLabel = document.getElementById('numSellersLabel');
var numBuyersLabel = document.getElementById('numBuyersLabel');

var sellersSlider = document.getElementById('sellersSlider');
var buyersSlider = document.getElementById('buyersSlider')

var avgValueInfo = document.getElementById('avgValueInfo');
var totalValueInfo = document.getElementById('totalValueInfo');

var supplyShockLen = document.getElementById('supplyShockLength')
var demandShockLen = document.getElementById('demandShockLength')

function updateNumSellers() {
    numSellersLabel.innerHTML = "number of sellers: " + sellersSlider.value;
    changeSellers(sellersSlider.value);
}

function updateNumBuyers() {
    numBuyersLabel.innerHTML = "number of buyers: " + buyersSlider.value;
    changeBuyers(buyersSlider.value);
}

function updateAverageValue(val) {
    avgValueInfo.innerHTML = "average value of good: $" + (Math.round(val * 10000) / 100) 
}

function updateTotalValue(val) {
    totalValueInfo.innerHTML = "total value of goods: $" + (Math.round(val * 10000) / 100) 
}

function supplyShockUI() {
    supplyShock(Number(supplyShockLen.value));
}

function demandShockUI() {
    demandShock(Number(demandShockLen.value));
}