// d3 = require("https://d3js.org/d3.v5.min.js");
// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
// JSON: "Javascript Object Notation" - a way to represent and store data
d3.json("samples.json").then((incomingData) => { // .then, waits for data to load
    // Filter and display top 10 OTUs
    function filterData(otu) {
        return otu; // TODO: Only return otus that match certain criteria
    }

    var filteredOtus = incomingData.filter(filterData); // Use filter() to pass the function as its argument
    console.log(filteredOtus); //  Check to make sure your are filtering your movies.

    var otu_ids = filteredOtus.map(sample => sample.id); // Use the map method with the arrow function to return all the filtered movie titles.
    var sample_values = filteredOtus.names // filteredMovies.map(movies => movies.metascore);   // Use the map method with the arrow function to return all the filtered movie metascores.

    // Create your trace.
    var trace = {
        x: otu_ids,
        y: sample_values,
        type: "bar"
    };

    // Create the data array for our plot
    var data = [trace];

    // Define the plot layout
    var layout = {
        title: "Top 10 OTUs Found",
        xaxis: { title: "OTU Labels" },
        yaxis: { title: "OTU IDs" }
    };

    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);
});