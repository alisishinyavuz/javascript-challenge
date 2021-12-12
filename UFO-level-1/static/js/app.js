console.log("app.js loaded");
console.log(data);

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


tableData.forEach((ufoReport) => {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(([key, value]) => {
        console.log(`key = ${key}, value = ${value}`);
        var cell = row.append("td").text(value);
    });
});


// Select button
var button = d3.select("#filter-btn");


// Create event handlers
button.on("click", runEnter);



// Complete event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Delete the previously loaded table rows (if there were any)
    tbody.html("");    

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#searchDate");

    // Get the value property of the input element, !!!Trim the white space from beginning and end 
    var inputValue = inputElement.property("value").trim();

    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(selectedData => {
        var row = tbody.append("tr");
        Object.entries(selectedData).forEach(([key,value]) => {
        var cell = row.append("td").text(value);   
        });
    });
};


