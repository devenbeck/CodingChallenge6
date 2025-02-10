//Task 1: Function Declaration
//Scenario: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {         //function calculating total profit
    let profit= (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}; 
console.log(calculateProfit(20,30,100));                 //should be (30-20)*100 =$1000
console.log(calculateProfit(50,70,200));                 // = $4000