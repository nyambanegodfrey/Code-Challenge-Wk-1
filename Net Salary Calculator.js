// Function to calculate the tax based on the KRA tax rates
function calculateTax(basicSalary) {
  if (basicSalary <= 24000) {
    return 0;
  } else if (basicSalary <= 32333) {
    return 0.1 * (basicSalary - 24000);
  } else if (basicSalary <= 45666) {
    return 0.25 * (basicSalary - 32333) + 2400;
  } else {
    return 0.3 * (basicSalary - 45666) + 7083.33;
  }
}

// Function to calculate the NHIF contributions
function calculateNHIF(basicSalary) {
  if (basicSalary < 6000) {
    return 150;
  } else if (basicSalary < 12000) {
    return 300;
  } else if (basicSalary < 18000) {
    return 400;
  } else if (basicSalary < 24000) {
    return 500;
  } else if (basicSalary < 30000) {
    return 600;
  } else {
    return 750;
  }
}

// Function to calculate the NSSF contributions
function calculateNSSF(basicSalary) {
  return 0.06 * basicSalary;
}

// Function to calculate the gross salary
function calculateGrossSalary(basicSalary, benefits) {
  return basicSalary + benefits;
}

// Function to calculate the net salary
function calculateNetSalary(grossSalary, tax, nhif, nssf) {
  return grossSalary - tax - nhif - nssf;
}

// Example usage:
const basicSalary = 15000;

const benefits = 5000;

const tax = calculateTax(basicSalary + benefits);

const nhif = calculateNHIF(basicSalary);

const nssf = calculateNSSF(basicSalary);

const grossSalary = calculateGrossSalary(basicSalary, benefits);

const netSalary = calculateNetSalary(grossSalary, tax, nhif, nssf);

console.log(`Gross salary: ${grossSalary}`);

console.log(`Tax: ${tax}`);

console.log(`NHIF deductions: ${nhif}`);

console.log(`NSSF deductions: ${nssf}`);

console.log(`Net salary: ${netSalary}`);