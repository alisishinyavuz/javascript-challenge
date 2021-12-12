console.log("app.js loaded");
console.log(data);
// Get the data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the search item and get the raw HTML node
var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");

// Define a function to create HTML table 
tableData.forEach((ufoReport) => {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(([key, value]) => {
        console.log(`key = ${key}, value = ${value}`);
        var cell = row.append("td").text(value);
    });

});

// Select button
var searchButton = d3.select("#searchButton");

// Create event handlers
searchButton.on("click", runEnter);

funtion(runEnter) {
    // Setup: Prevent the page from refreshing on events
    d3.event.preventDefault();
    // Delete the previously loaded table rows (if there were any)
    tbody.html("");


    // find the data user searches
    var findDate = searchDate.property("value");
    var findCity = searchCity.property("value").toLowerCase();
    var findState = searchState.property("value").toLowerCase();
    var findCountry = searchCountry.property("value").toLowerCase();
    var findShape = searchShape.property("value").toLowerCase();

    console.log(findDate);
    console.log(findCity);
    console.log(findState);
    console.log(findCountry);
    console.log(findShape);

    if (findDate) {
        var filteredData = tableData.filter(tableData => tableData.datetime === findDate);
        console.log(filteredData);

        if (filteredDate.length !== 0) {
            filteredData.forEach(selectedData => {
                var row = tbody.append("tr");
                Object.entries(selectedData).forEach(([key, value]) => {
                    var cell = row.append("td").text(value);
                });
            });
        }
    
        else {
            // Clear out the previously loaded HTML:
            tbody.html("");

            // Tell them "No rows match"
            tbody.append("tr").append("td").text("No ufo sightings on this date!");
        }

    }    


    else if (findCity) {

        var filteredData = tableData.filter(tableData => tableData.city === findCity);

        if (filteredData.length !== 0) {
            filteredData.forEach(selectedData => {
                var row = tbody.append("tr");
                Object.entries(selectedData).forEach(([key, value]) => {
                var cell = row.append("td").text(value);
                });
            });

        }

        else {
            // Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No ufo sightings on this city!");
            }
    }


    else if (findState) {

        var filteredData = tableData.filter(tableData => tableData.state === findState);

        if (filteredData.length !== 0) {
            filteredData.forEach(selectedData => {
                var row = tbody.append("tr");
                Object.entries(selectedData).forEach(([key, value]) => {
                    var cell = row.append("td").text(value);
                });
            });    

        }

        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
        // Tell them "No rows match"
            tbody.append("tr").append("td").text("No ufo sightings on this city!");
        }
    }    


    else if (findCountry) {

        var filteredData = tableData.filter(tableData => tableData.country === findCountry);

        if (filteredData.length !== 0) {
            filteredData.forEach(selectedData => {
                var row = tbody.append("tr");
                Object.entries(selectedData).forEach(([key, value]) => {
                    var cell = row.append("td").text(value);
                });
            });    

        }

        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
        // Tell them "No rows match"
            tbody.append("tr").append("td").text("No ufo sightings on this country!");
        }
    }    



    else (findShape) {

        var filteredData = tableData.filter(tableData => tableData.shape === findShape);

        if (filteredData.length !== 0) {
            filteredData.forEach(selectedData => {
                var row = tbody.append("tr");
                Object.entries(selectedData).forEach(([key, value]) => {
                    var cell = row.append("td").text(value);
                });
            });    

        }

        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
        // Tell them "No rows match"
            tbody.append("tr").append("td").text("No ufo sightings on this shape!");
        }
    }    

}; 
var resetButton = d3.select("#resetButton");
resetButton.on("click", runReset);

function runReset {

    searchDate.property("value")= "";
    searchCity.property("value")= "";
    searchState.property("value")= "";
    searchCountry.property("value")= "";
    searchShape.property("value")="";
	

    tableData.forEach((ufoReport) => {
        console.log(ufoReport);
        var row = tbody.append("tr");
    
        Object.entries(ufoReport).forEach(([key, value]) => {
            console.log(`key = ${key}, value = ${value}`);
            var cell = row.append("td").text(value);
        });
    
    });
        
};





     