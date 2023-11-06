excel_file.addEventListener('change', (event) => {

    if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
    {
        document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';

        excel_file.value = '';

        return false;
    }

    var reader = new FileReader();

    reader.readAsArrayBuffer(event.target.files[0]);

    reader.onload = function(event){

        var data = new Uint8Array(reader.result);

        var work_book = XLSX.read(data, {type:'array'});

        var sheet_name = work_book.SheetNames;
		
		//convert the file into json format
        var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});
		
		//parse through the file, to load the data into arrays
        if(sheet_data.length > 0)
        {
            for (var row = 0; row < sheet_data.length; row++) {
                for (var cell = 0; cell < sheet_data[row].length; cell++) {
                    year = cell - 1;
                    if (row == 0) {// add years
                        if (sheet_data[row][cell] != undefined) {
                            years.push(sheet_data[row][cell]);
                        }
                    }
                    else { // append data
                        if (sheet_data[row].length == 1) { // add a district
                            district++;
                            districts.push(sheet_data[row][cell]);
                            xValues[district] = [] // add an array of values for new district
                            yValues[district] = [] // add an array of years for new district
                        }
                        else if (cell == 0) {
                            xValues[district].push(sheet_data[row][cell]) // add xValue
                        }
                        else {
                            if (yValues[district].length < years.length) {
                                yValues[district].push([]) // add an array of values for new year
                            }
                            yValues[district][year].push(sheet_data[row][cell]) // add an array of values for new year
                        }
                    }
                }
            }
        }
        excel_file.value = '';
        console.log("log1.0 file was read")
    }
});

const submit_btn = document.getElementById('submit_btn');
submit_btn.addEventListener('click', (event) => {
    const district_index = document.getElementById('district_index').value
    const year_index = document.getElementById('year_index').value
    var display_graph = document.getElementById('display_graph')
    display_graph.innerHTML = ('<canvas id="Chart" style="width:80%;max-width:1000px"></canvas>')
    drawGraph(district_index, year_index)
});

function drawGraph(district, year) { 
    console.log("log1.1 drawGraph called")

    var nonEmptyValues = getNonEmptyValues(district, year);
    var xValues = nonEmptyValues[0];
    var yValues = nonEmptyValues[1];
    var barColors = ["red", "green","blue","orange","brown","yellow","purple","turqoise","beige", "#FF33E0", "#33EBFF", "#62FF33", "#959595"];
    // var barColors = generateRandomColors(xValues.length)

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

function generateRandomColors(amt){
    var randColors = []
    console.log("log1.3 getRandomColors called")
    for (var i = 0; i < amt; i++) {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        randColors.push(`#${randColor.toUpperCase()}`)
    }  
    return randColors
}