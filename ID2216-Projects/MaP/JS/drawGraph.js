// const submit_btn = document.getElementById('submit_btn');
// submit_btn.addEventListener('click', (event) => {
//     const district_index = document.getElementById('district_index').value
//     const year_index = document.getElementById('year_index').value
//     var display_graph = document.getElementById('display_graph')
//     display_graph.innerHTML = ('<canvas id="Chart" style="width:80%;max-width:1000px"></canvas>')
//     drawGraph(district_index, year_index)
// });

function drawGraph(district, year) { 
    console.log("log1.1 drawGraph called")

    var nonEmptyValues = getNonEmptyValues(district, year);
    var xValues = nonEmptyValues[0];
    var yValues = nonEmptyValues[1];
    var barColors = ["red", "green","blue","orange","brown","yellow","purple","turqoise","beige", "#FF33E0", "#33EBFF", "#62FF33", "#959595"];

    new Chart("Chart", {
        type: "doughnut",
            data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yVals
            }]
        },
        options: {
            title: {
                display: true,
                text: "Crime info about " + districts[district] + " in " + years[year]
            }
        }
    });
}

function getNonEmptyValues(district, year) {
    xVals = []
    yVals = []
    console.log("log1.2 getNonEmptyValues called")
    for (var i = 0; i < yValues[district][year].length; i++) {
        if (Number.isInteger(yValues[district][year][i])) {
            xVals.push(xValues[district][i])
            yVals.push(yValues[district][year][i])
        }
    }
    return [xVals,yVals]
}