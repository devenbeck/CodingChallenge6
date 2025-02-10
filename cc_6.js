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