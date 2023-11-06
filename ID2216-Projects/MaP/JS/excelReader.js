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