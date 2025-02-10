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

//Task 3: Arrow Function
// Scenario: Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Excellent") {       // all the different options for bonuses based on performance
        bonus = salary * 0.2;               //20% of salary
    }
    else if (performanceRating === "Good"){

        bonus = salary * 0.1;          //10% of salary
    }
    else if (performanceRating === "Average"){
        bonus = salary * 0.05;        //5% of salary
    }
    return `Bonus: $${bonus}`;
}; 
console.log(calculateBonus(5000, "Excellent"));    //printed result should be a $1000 bonus
console.log(calculateBonus(7000, "Good"));         //should be $700 bonus

//Task 4: Parameters and Arguments
//Scenario: Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {  //function that calculates cost based on 3 parameters
    let monthlyCost;
    if (plan === "Basic") {
        monthlyCost = 10;    //$10/month
    }
    else if (plan === "Premium") {
        monthlyCost = 20;    //$20/month
    }
    else if (plan === "Enterprise") {
        monthlyCost = 50;    //$50/month
    }
    let totalCost = (monthlyCost * months) - discount;
    return `Total Cost: $${totalCost}`;
}
console.log(calculateSubscriptionCost("Basic", 6, 10));    // (6*10) - 10 = 50 printed output
console.log(calculateSubscriptionCost("Premium", 12, 0)); // (12*20) - 0 = 240 printed output

//Task 5: Returning Values
// Scenario: Currency Conversion
function convertCurrency(amount, exchangeRate) {       //function to convert amount based on exchange rate
    let convertAmount = amount * exchangeRate 
    return `Converted Amount: $${convertAmount.toFixed(2)}`;  //toFixed rounds it to 2 decimal places

};
console.log(convertCurrency(100, 1.1));   //output should be $110.00
console.log(convertCurrency(250,0.85));   //output should be $212.50

//Task  6: Higher Order Functions
// Scenario: Discount Strategy for Bulk Orders
// write a higher order function that applies a 10% discount on orders above $500

let orders = [200,600,1200,450,800]; // Orders Array

function applyBulkDiscount(orders, discountFunction) {
    return orders.map (discountFunction)   //map method used to create new array after editing each element of the existing array
}; 
let discountFunction = amount => amount > 500 ? amount * 0.9 : amount;     //function checks if amount is greater than 500 so it knows to add the 10% discount or not
let discountedOrders = applyBulkDiscount(orders, discountFunction);

console.log(discountedOrders) // output for new array should be: [200,540,1080, 450, 720]

//Task 7: Closures
// Scenario: Business Expense Tracker
// make a function that returns another function to add expenses and keep a running total
function createExpenseTracker() {
    let totalExpenses = 0;
    return function (expense) {
        totalExpenses += expense;   //just keep adding the expenses on to the previous total
        return `Total Expenses: $${totalExpenses}`;
    };
};
let tracker = createExpenseTracker();
console.log(tracker(200));   //output should be 200 because it's the first one
console.log(tracker(150));   //output should be 350 because adding it to the 200
