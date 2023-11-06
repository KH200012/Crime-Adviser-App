var informationWindows = new Array();

//windows
// informationWindows[0] = new google.maps.InfoWindow({
//     content: "This is information about Kungsholmens",
//     ariaLabel: "Kungsholmens",
//     });

    
const KungsholmensInfowindow = new google.maps.InfoWindow({
    content: "<div id='display_graph' style='width:750px !important;height:750px;'>" + "</div>" ,
    ariaLabel: "Kungsholmens",
});


marks[0].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(0 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[0],
        map,
    });
});


marks[1].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(1 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[1],
        map,
    });
});

marks[2].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(2 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[2],
        map,
    });
});


marks[3].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(3 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[3],
        map,
    });
});

marks[4].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(4 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[4],
        map,
    });
});


marks[5].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(5 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[5],
        map,
    });
});

marks[6].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(6 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[6],
        map,
    });
});


marks[7].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(7 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[7],
        map,
    });
});

marks[8].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(8 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[8],
        map,
    });
});


marks[9].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(9 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[9],
        map,
    });
});

marks[10].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(10 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[10],
        map,
    });
});


marks[11].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(11 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[11],
        map,
    });
});

marks[12].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(12 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[12],
        map,
    });
});

marks[13].addListener("click", () => {//         
    var tmp_display_graph = document.getElementById('display_graph');
    tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>');
    drawGraph(13 ,this_year-2015);
    // html = search(name, year);
    KungsholmensInfowindow.open({
        anchor: marks[13],
        map,
    });
});

// for(var j=0; j<marks.length;j++){
//     marks[j].addListener("click", () => {
        
//         // var tmp_display_graph = document.getElementById('display_graph')
//         // tmp_display_graph.innerHTML = ('<canvas id="Chart" style="width:100%;max-width:100%"></canvas>')
//         drawGraph(j ,this_year-2015);
//         map;
//      });
// 