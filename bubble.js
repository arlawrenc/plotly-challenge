
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 1000 - margin.left - margin.right,
                height = 700 - margin.top - margin.bottom;
        //height=600;
        // append the svg object to the body of the page

        //C:\Users\timli\OneDrive\appjedi\Students\AudreyL\Instructions1\Instructions\StarterCode\assets\data\data.csv
        //Read the data
        var i = 0;
        var states = "";
        var testData = [{"otu_ids": 2318, "value": 40, "label": "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus"}, {"otu_ids": 1977, "value": 40, "label": "Bacteria;Firmicutes;Clostridia;Clostridiales"}, {"otu_ids": 189, "value": 47, "label": "Bacteria"}, {"otu_ids": 352, "value": 50, "label": "Bacteria"}, {"otu_ids": 1189, "value": 51, "label": "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas"}, {"otu_ids": 41, "value": 71, "label": "Bacteria"}, {"otu_ids": 2264, "value": 78, "label": "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI"}, {"otu_ids": 482, "value": 113, "label": "Bacteria"}, {"otu_ids": 2859, "value": 126, "label": "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus"}, {"otu_ids": 1167, "value": 163, "label": "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas"}];
        testData = [{"otu_ids": 1795, "value": 2, "label": "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus"}];
        var yCount = 0;
        var demo = null;
        var demoId = 0;
        //d3.csv("data.csv", 
  
        function createBubble(idx) {
            const data = getData(idx);
            demoId = data[0].id;
            demo = getMeta(demoId);
            showDemo(demo);
                //console.log(demo);
            document.getElementById("divBubble").innerHTML = " <p>Value</p>";
                //return;
            console.log(JSON.stringify(data));
            var svg = d3
                    .select("#divBubble")
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            // Add X axis
            var i3 = 0;
            //for (var i2 in data) ++i3;
            //alert(i3);
            var x = d3.scaleLinear().domain([0, 3500]).range([0, width]);
            var test = "";
            height = 600;

            svg
                    .append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(d3.axisBottom(x));

            // Add Y axis

            var y = d3.scaleLinear().domain([0, 320]).range([600, 0]);
            /*
             y.domain([0,50,100,150,200].map(function(d) { 
             console.log("y:"+d);
             return d; }));
             y.range([height, 0]);
             */
            svg.append("g").call(d3.axisLeft(y));

            var elem = svg.selectAll("#my_dataviz").data(data).enter();
            var elemEnter = elem;

            for (var idx in data) {



                var x = data[idx].otu_ids;

                //var x = (age - 24) * 35;

                //var smoke = data[idx].smokes;
                var y = data[idx].value  //680 - (smoke - 4) * 26;

                var color = "#ccff33";

                if (data[idx].value < 100)
                    color = "#66ffcc";
                else if (data[idx].value < 50)
                    color = "#6600ff";
// #6600ff #ecd8c6
                var val = data[idx].value;
                var work = 2 * val;
                //70
                var y2 = 600 - work;
                var x2 = x / 4;
                //y2=0;
                elem
                        .append("circle")
                        .attr("cx", x2)
                        .attr("cy", y2)
                        .attr("r", data[idx].value / 2)
                        .style("fill", color);
                        /*
                elem
                        .append("text")
                        .attr("dx", x2 - 10)
                        .attr("dy", y2)
                        .attr("font-size", "10px")
                        .text(" O: " + data[idx].otu_ids + "\nv: " + data[idx].value);
                console.log("y2: " + y2 + " o: " + data[idx].otu_ids + "<br/>v: " + data[idx].value);
                */
            }

        }