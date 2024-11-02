"use strict";

// Shortcut for querySelector
const $ = selector => document.querySelector(selector);

// Function to process the entries
const processEntry = (event) => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    // Validate entries
    if (isNaN(subtotal) || subtotal <= 0) {
        alert("Please enter a valid subtotal greater than zero.");
        $("#subtotal").focus();
        return;
    }
    if (isNaN(taxRate) || taxRate < 0) {
        alert("Please enter a valid tax rate.");
        $("#tax_rate").focus();
        return;
    }

    // Calculate sales tax and total
    const salesTax = (subtotal * (taxRate / 100)).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(salesTax)).toFixed(2);

    // Display results
    $("#sales_tax").value = salesTax;
    $("#total").value = total;
};

// Function to clear the form
const clearForm = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";
    $("#subtotal").focus();
};

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntry);
    $("#clear").addEventListener("click", clearForm);
    $("#subtotal").focus();
});
