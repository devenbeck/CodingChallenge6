//Task 1: Function Declaration
//Scenario: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {         //function calculating total profit
    let profit= (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}; 
console.log(calculateProfit(20,30,100));                 //should be (30-20)*100 =$1000
console.log(calculateProfit(50,70,200));                 // = $4000

//Task 2: Function Expression
// Scenario: Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {  //function for calculating sales tax
    let salesTax = (amount * taxRate)
    return `Sales Tax: $${salesTax}`;
};
console.log(calculateSalesTax(100, 0.07));   //$7 
console.log(calculateSalesTax(500, 0.1));   // $50