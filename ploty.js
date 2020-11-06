var demo = null;
var demoId = 0;
/*
function changeData(lst)
{
    createChart(lst.value);
}
*/
var dataSave = [{"salesperson": "Bob", "sales": 33}, {"salesperson": "Robin", "sales": 12}, {"salesperson": "Anne", "sales": 41}, {"salesperson": "Mark", "sales": 16}, {"salesperson": "Joe", "sales": 59}, {"salesperson": "Eve", "sales": 38}, {"salesperson": "Karen", "sales": 21}, {"salesperson": "Kirsty", "sales": 25}, {"salesperson": "Chris", "sales": 30}, {"salesperson": "Lisa", "sales": 47}, {"salesperson": "Tom", "sales": 5}, {"salesperson": "Stacy", "sales": 20}, {"salesperson": "Charles", "sales": 13}, {"salesperson": "Mary", "sales": 29}];
//var data = [{"otu_ids":"OTU 1167","value":163},{"otu_ids":"OTU 2859","value":126},{"otu_ids":"OTU 482","value":113},{"otu_ids":"OTU 2264","value":78},{"otu_ids":"OTU 41","value":71},{"otu_ids":"OTU 1189","value":51},{"otu_ids":"OTU 352","value":50},{"otu_ids":"OTU 189","value":47},{"otu_ids":"OTU 2318","value":40},{"otu_ids":"OTU 1977","value":40}];
function createPloty(idx)
{
    document.getElementById("divPloty").innerHTML="<p>Value</p>";

   // const idx = prompt ("Index:");
            const data = getData(parseInt(idx));
            demoId = data[0].id;
            demo = getMeta(demoId);
            showDemo(demo);
            // set the dimensions and margins of the graph
            var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

    // set the ranges
    var y = d3.scaleBand()
            .range([height, 0])
            .padding(0.1);

    var x = d3.scaleLinear()
            .range([0, width]);

    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#divPloty").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");

    // format the data
    data.forEach(function (d) {
        d.value = +d.value;
    });

    // Scale the range of the data in the domains
    x.domain([0, d3.max(data, function (d) {
            return d.value * 2;
        })])
    y.domain(data.map(function (d) {
        return d.otu_ids;
    }));
    //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            //.attr("x", function(d) { return x(d.sales); })
            .attr("width", function (d) {
                return x(d.value);
            })
            .attr("y", function (d) {
                return y(d.otu_ids);
            })
            .attr("height", y.bandwidth());

    // add the x Axis
    svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

    // add the y Axis
    svg.append("g")
            .call(d3.axisLeft(y));
}
