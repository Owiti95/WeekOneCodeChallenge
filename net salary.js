// function grossSalary(basicSalary, benefits) {
//     let grossIncome = basicSalary + benefits;
//     return grossIncome;
// }

// function tax(grossIncome) {
//     let taxAmount;
    
//     if (grossIncome <= 288000) {
//     taxAmount = (0.1 * grossIncome)
// } else if (income > 288000 && income <= 387996) {
//     taxRate = (0.25 * grossIncome)
// } else {
//     taxRate = (0.3 * grossIncome)
// }

//     let taxMinusAmount = grossIncome - taxAmount;
//     return taxMinusAmount;

//     deductions = 

//     const netPay = taxMinusAmount - deductions
// }


// Function to calculate gross salary

const calculateGrossSalary = function(basicSalary, benefits) {
    return basicSalary + benefits;
};
// Function to calculate tax payable
const calculateTax = function(grossSalary) {
        const taxBrackets = [24000, 32333, 40333, 48333, 57333];
        const taxRates = [10, 15, 20, 25, 30, 35];
        const taxAmounts = [0, 2400, 2967, 3383, 3800, 4250];
        let tax = 0;
        
// Determine the tax rate based on the gross salary
if (grossSalary <= taxBrackets[0]) {
    tax = grossSalary * (taxRates[0]/100);
} else if (grossSalary <= taxBrackets[1]) {
    tax = taxAmounts[0] + (grossSalary - taxBrackets[0]) * (taxRates[1] / 100);
} else if (grossSalary <= taxBrackets[2]) {
    tax = taxAmounts[1] + (grossSalary - taxBrackets[1]) * (taxRates[2] / 100);
} else if (grossSalary <= taxBrackets[3]) {
    tax = taxAmounts[2] + (grossSalary - taxBrackets[2]) * (taxRates[3] / 100);
} else if (grossSalary <= taxBrackets[4]) {
    tax = taxAmounts[3] + (grossSalary - taxBrackets[3]) * (taxRates[4] / 100);
} else {
    tax = taxAmounts[4] + (grossSalary - taxBrackets[4]) * (taxRates[5] / 100);
}
return tax;
};
//Constants for deductions
const NHIF = 500;
const NSSF = 200;

// Function to calculate net salary
const calculateNetSalary = function(basicSalary, benefits) {
    //gross salary
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    //tax payable
    const taxPayable = calculateTax(grossSalary);
    //deductions
    const deductions = NHIF + NSSF;
    // Calculate net salary
    const netSalary = grossSalary - taxPayable - deductions;
    return netSalary;
};

// Example usage
const basicSalary = 50000;
const benefits = 10000;
// Calculate net INCOME
const netSalary = calculateNetSalary(basicSalary, benefits);

