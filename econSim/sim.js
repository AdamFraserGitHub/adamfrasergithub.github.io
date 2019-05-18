var maxMinSellPrice = 1;
var maxMaxBuyPrice = 1;
var sellerAdjustmentRate = 0.01;
var buyerAdjustmentRate = 0.01;
var bankrupcyResistance = 10; //number of turns a buisness cannot sell before going bankrupt
var customerStubborness = 10; //number of turns before a customer gives up
var infoUpdateRate = 30;


var buyers = []
var sellers = []

class Seller {
    constructor(setMinPrice) {
        if(setMinPrice) {
            this.minPrice = setMinPrice;
        } else {
            this.minPrice = Math.random() * maxMinSellPrice;
        }
        this.sellPrice = this.minPrice + Math.random() / 10;
        this.hasSoldThisRound = false;
        this.hasNotSoldIn = 0;
        this.id = Math.random();
    }

    adjustToMarket() {
        if(!this.hasSoldThisRound) {
            this.hasNotSoldIn ++;
            this.sellPrice -= sellerAdjustmentRate * (this.sellPrice - this.minPrice);
            if(this.sellPrice < this.minPrice + 0.001) {
                this.sellPrice = this.minPrice  //prevents ever constantly decreasing sell prices that don't actually change anything
                                                //also catches any errors that would cause seller to sell bellow min sell price
            }

            //handles bankrupcy
            if(this.hasNotSoldIn > bankrupcyResistance) {
                sellers.push(new Seller(0.9 * this.minPrice));
                for(var i = 0; i < sellers.length; i++) {
                    if(sellers[i].id == this.id) {
                        sellers.splice(i,1)
                    }
                }
            }
        } else {
            // this.sellPrice += sellerAdjustmentRate * (this.sellPrice - this.minPrice) //TODO: this seems waay too easy
            this.sellPrice += sellerAdjustmentRate;
            this.hasNotSoldIn = 0;
        }

        this.hasSoldThisRound = false;
    }
}

class Buyer {
    constructor(setMaxPrice) {
        if(setMaxPrice) {
            this.maxPrice = setMaxPrice;
        } else {
            this.maxPrice = Math.random() * maxMaxBuyPrice;
        }
        this.buyPrice = this.maxPrice - Math.random() / 10;
        this.hasBoughtThisRound = false;
        this.triedSellers = [];
        this.hasNotBoughtIn = 0; //simulates buyers leaving market (if you want to buy a car for £5 you'll just take the bus)
        this.id = Math.random();
    }

    adjustToMarket() {
        if(!this.hasBoughtThisRound) {
            this.buyPrice += buyerAdjustmentRate * (this.maxPrice - this.buyPrice);
            if(this.buyPrice > this.maxPrice) {
                this.buyPrice = this.maxPrice
            }

            //handles leaving market
            this.hasNotBoughtIn ++;
            if(this.hasNotBoughtIn > customerStubborness) {
                buyers.push(new Buyer()); //new Buyer((1.1) * this.maxPrice) 
                for(var i = 0; i < buyers.length; i++) {
                    if(buyers[i].id == this.id) {
                        buyers.splice(i,1)
                    }
                }
            }
        } else {
            // this.buyPrice -= buyerAdjustmentRate * (this.maxPrice - this.buyPrice) //TODO: this seems waay too easy
            this.buyPrice -= buyerAdjustmentRate;
            this.hasNotSoldIn = 0;
        }

        this.hasBoughtThisRound = false;
    }
}





//this block of code works to create transactions between buyers and sellers.
//an explaination of the algorithm can be found in "transactionAlgo.txt"
function preformTransactions() {
    var totalValue = 0;

    var remainingSellerIndicies = [];
    for(var i = 0; i < sellers.length; i++) {
        remainingSellerIndicies.push(i);
    }

    var remainingBuyerIndicies = [];
    for(var i = 0; i < buyers.length; i++) {
        remainingBuyerIndicies.push(i);
    }

    //setup transactions
    var i = 0;
    var currBuyer, currSeller;
    while((remainingBuyerIndicies.length > 0 && remainingSellerIndicies.length > 0) && i < 1000) {
        i++
        //attempts a transaction between a random buyer and a random seller
        //if the transaction was successfull then the buyers and sellers are removed
        //if not they remain in the list
        //also theres some inception level index shit going on
        var buyerIndexIndex = Math.floor(Math.random() * remainingBuyerIndicies.length);
        var sellerIndexIndex;

        currBuyer = buyers[remainingBuyerIndicies[buyerIndexIndex]]; //keeps things tidy

        //this shitshow of a block compensates for my terrible code, this whole algo needs a rework
        var nSellersTried = 0;
        var sellersTriedThisRound = [];
        do {
            sellerIndexIndex = Math.floor(Math.random() * remainingSellerIndicies.length);
            if(!sellersTriedThisRound.includes(sellerIndexIndex)) {
                sellersTriedThisRound.push(sellerIndexIndex);
                nSellersTried ++;
            }
        } while (currBuyer.triedSellers.includes(remainingBuyerIndicies[sellerIndexIndex]) && nSellersTried < remainingSellerIndicies.length - 1)
        if(nSellersTried >= remainingSellerIndicies.length - 1) {
            remainingBuyerIndicies.splice(buyerIndexIndex,1);
            continue;
        }

        currSeller = sellers[remainingSellerIndicies[sellerIndexIndex]]



        if(currBuyer.buyPrice > currSeller.sellPrice) {
            totalValue += currSeller.sellPrice;
            currBuyer.hasBoughtThisRound = true;
            currSeller.hasSoldThisRound = true;

            remainingBuyerIndicies.splice(buyerIndexIndex,1);
            remainingSellerIndicies.splice(sellerIndexIndex,1);
        } else {
            currBuyer.triedSellers.push(remainingBuyerIndicies[sellerIndexIndex]);
        }
    }

    for(var i = 0; i < buyers.length; i++) {
        buyers[i].adjustToMarket();
    }

    for(var i = 0; i < sellers.length; i++) {
        sellers[i].adjustToMarket();
    }

    return totalValue;
}





//this block handles UI elements
function changeBuyers(newVal) {
    var difference = newVal - buyers.length;

    if(difference < 0) {
        for(var i = 0; i < Math.abs(difference); i++) {
            buyers.splice(0,1)
        }
    } else if(difference > 0) {
        for(var i = 0; i < difference; i++) {
            buyers.push(new Buyer())
        }
    }
}

function changeSellers(newVal) {
    var difference = newVal - sellers.length;

    if(difference < 0) {
        for(var i = 0; i < Math.abs(difference); i++) {
            sellers.splice(0,1)
        }
    } else if(difference > 0) {
        for(var i = 0; i < difference; i++) {
            sellers.push(new Seller())
        }
    }
}

var supplyShockTurns = 0;
function supplyShock(length) {
    supplyShockTurns = length;
}

var demandShockTurns = 0;
function demandShock(length) {
    demandShockTurns = length;
}




// this block of code captures and stores a variety of economic metrics of the current simulation
function getAvgPrice() {
    var avgPrice = 0;
    for(var i = 0; i < sellers.length; i++) {
        avgPrice += sellers[i].sellPrice;
    }
    return avgPrice / sellers.length;
}





var roundCount = 0; //used to count rounds and avoid ott info updates
function runRound() {
    var totalValue = preformTransactions();
    var avgSellPrice = getAvgPrice()
    addDataPointToGraph(avgSellPrice);

    if(roundCount % infoUpdateRate == 0) {
        updateAverageValue(avgSellPrice);
        updateTotalValue(totalValue);
        roundCount = 0;
    }
    roundCount ++;

    if(supplyShockTurns > 0) {
        for(var i = 0; i < sellers.length; i++) {
            sellers[i].minPrice *= (1 + Math.random() * 0.02);
        }
        supplyShockTurns --;
    }

    if(demandShockTurns > 0) {
        // console.log("demand shock!!!")
        for(var i = 0; i < buyers.length; i++) {
            buyers[i].buyPrice *= (1 - Math.random()*0.1);
        }
        demandShockTurns --;
    }

    // if(Math.random() > 0.9) {
    //     sellers.splice(0,1)
    // }
    // if(Math.random() > 0.75) {
    //     sellers.push(new Seller());
    // }

    // if(Math.random() > 0.9) {
    //     buyers.splice(0,1)
    // }
    // if(Math.random() > 0.75) {
    //     buyers.push(new Buyer());
    // }

    // // simulates crashes
    // if(Math.random() > 0.999) {
    //     console.log("supply crash");
    //     for(var i = 0; i < sellers.length * 0.75; i++) {
    //         sellers.splice(0,1)
    //     }
    // }

    // if(Math.random() > 0.999) {
    //     console.log("demand crash");
    //     for(var i = 0; i < buyers.length * 0.75; i++) {
    //         buyers.splice(0,1);
    //     }
    // }

    renderGraph();
}

for(var i = 0; i < 50; i++) {
    sellers.push(new Seller());
}

for(var i = 0; i < 50; i++) {
    buyers.push(new Buyer());
}

// for(var i = 0; i < avgPriceCanvasW - 10; i++) {
//     runRound();
    
//     //shock
//     // if(i == 500) {
//     //     var origionalLength = sellers.length;
//     //     for(var j = 0; j < origionalLength / 2; j++) {
//     //         sellers.splice(0,1);
//     //     }
//     // }
// }


setInterval(runRound, 1000/30);
