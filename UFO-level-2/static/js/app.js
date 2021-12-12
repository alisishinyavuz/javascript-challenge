console.log("app.js loaded");
console.log(data);
// Get the data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// to create HTML table 
tableData.forEach((ufoReport) => {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(([key, value]) => {
        console.log(`key = ${key}, value = ${value}`);
        var cell = row.append("td").text(value);
    });
});

// Select buttons 
var searchDate = d3.select("#searchDate");
var searchCity = d3.select("#searchCity");
var searchState = d3.select("#searchState");
var searchCountry = d3.select("#searchCountry");
var searchShape = d3.select("#searchShape");


// Select button
var searchButton = d3.select("#searchButton");

// Create event handlers
searchButton.on("click", runEnter);

function runEnter() {
    // Setup: Prevent the page from refreshing on events
    d3.event.preventDefault();
    // Delete the previously loaded table rows (if there were any)
    tbody.html("");


    // find the data user searches
    var inputDate = searchDate.property("value").trim();
    var inputCity = searchCity.property("value").toLowerCase().trim();
    var inputState = searchState.property("value").toLowerCase().trim();
    var inputCountry = searchCountry.property("value").toLowerCase().trim();
    var inputShape = searchShape.property("value").toLowerCase().trim();

    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);



    

    var filteredData = tableData.filter(tableData => (tableData.datetime == inputDate || inputDate == "") &&
                  (tableData.city == inputCity || inputCity == "") &&
                  (tableData.state == inputState || inputState == "") &&
                  (tableData.country == inputCountry || inputCountry == "") &&
                  (tableData.shape == inputShape || inputShape == "")
    );
   

    filteredData.forEach((Report) => {
        // Append a row to the table for each result.
        var row = tbody.append("tr");
        // Append the values of each of the objects in the result as the created rows' content.
        Object.entries(Report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
        });
    }
 
        
    // if (results.length !== 0) {
            
    //     filteredData.forEach(selectedData => {
    //     var row = tbody.append("tr");
            
    //     Object.entries(selectedData).forEach(([key, value]) => {
    //     var cell = row.append("td").text(value);
    //             });
    //         });
    //     }
            
    // else {
    //      // Clear out the previously loaded HTML:
    //     tbody.html("");
        
    //     // Tell them "No rows match"
    //     tbody.append("tr").append("td").text("No ufo sightings on this search!");
    //     }
        
    // }    

// // ---



// var resetButton = d3.select("#resetButton");
// resetButton.on("click", runReset);

// function runReset() {

//     document.getElementById("searchDate")= "";
//     document.getElementById("searchCity")= "";
//     document.getElementById("searchState")= "";
//     document.getElementById("searchCountry")= "";
//     document.getElementById("searchShape")= "";
    
//     tableData.forEach((Report) => {
//         // Append a row to the table for each result.
//         var row = tbody.append("tr");
//         // Append the values of each of the objects in the result as the created rows' content.
//         Object.entries(Report).forEach(([key, value]) => {
//            var cell = row.append("td");
//            cell.text(value);
//            });
//         });

// }

// document.getElementById("resetButton").onclick = function() {
//     document.getElementById("searchDate")= "";
//     document.getElementById("searchCity")= "";
//     document.getElementById("searchState")= "";
//     document.getElementById("searchCountry")= "";
//     document.getElementById("searchShape")= "";
   

//     tableData.forEach((Report) => {
//     // Append a row to the table for each result.
//     var row = tbody.append("tr");
//     // Append the values of each of the objects in the result as the created rows' content.
//     Object.entries(Report).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//        });
//     });

// };

document.getElementById("resetButton").onclick = function() {
    document.getElementById("searchDate").innerHTML = "";
 };