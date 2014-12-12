//jquery shorthand
var $graphic = $('#graphic');
//base colors
var colors = {
    'red1': '#6C2315', 'red2': '#A23520', 'red3': '#D8472B', 'red4': '#E27560', 'red5': '#ECA395', 'red6': '#F5D1CA',
    'orange1': '#714616', 'orange2': '#AA6A21', 'orange3': '#E38D2C', 'orange4': '#EAAA61', 'orange5': '#F1C696', 'orange6': '#F8E2CA',
    'yellow1': '#77631B', 'yellow2': '#B39429', 'yellow3': '#EFC637', 'yellow4': '#F3D469', 'yellow5': '#F7E39B', 'yellow6': '#FBF1CD',
    'teal1': '#0B403F', 'teal2': '#11605E', 'teal3': '#17807E', 'teal4': '#51A09E', 'teal5': '#8BC0BF', 'teal6': '#C5DFDF',
    'blue1': '#28556F', 'blue2': '#3D7FA6', 'blue3': '#51AADE', 'blue4': '#7DBFE6', 'blue5': '#A8D5EF', 'blue6': '#D3EAF7'
};

/*
 * Render the graphic
 */
//check for svg
$(window).load(function() {
    draw_graphic();
});

function draw_graphic(){
    if (Modernizr.svg){
        $("#graphic1").empty();
        $("#graphic2").empty();
        $("#graphic3").empty();
        $("#graphic4").empty();
        var width = $graphic.width();
        render(width);
        window.onresize = draw_graphic; //very important! the key to responsiveness
    }
}



function render(width) {


/////sfo//////
var sfo = [{"year":2011, "delay":11.0},
{"year":2012, "delay":15.3},
{"year":2013, "delay":8.0}
	];

    var graphic1 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.delay; })
        .yMax(18)
        .yAxisLabel("SFO")
        .tooltipFormat(d3.format(".f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("% delayed")
        .mobileThreshold(300)
        .tickSize(2)
        .yTickSize(6)
        ;

    d3.select("#graphic1")
        .datum(sfo)
        .call(graphic1);

////oak////

var oak = [{"year":2011, "delay":2.9},
{"year":2012, "delay":5.6},
{"year":2013, "delay":8.8}];

    var graphic2 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.delay; })
        .yAxisLabel("OAK")
        .tooltipFormat(d3.format(".f"))
        .strokeWidth(4)
        .aspect(4,3)
        .yMax(18)
        .mobileThreshold(300)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("% delayed")
        .strokeColor(colors.red2)
        .tickSize(2)
        .yTickSize(6);

    d3.select("#graphic2")
        .datum(oak)
        .call(graphic2);

////sjc////
var sjc = [{"year":2011, "delay":3.2},
{"year":2012, "delay":5.2},
{"year":2013, "delay":7.9}];

    var graphic3 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.delay; })
        .yAxisLabel("SJC")
        .tooltipFormat(d3.format(".f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("% delayed")
        .mobileThreshold(300)
        .strokeColor(colors.orange2)
        .yMax(18)
        .tickSize(2)
        .yTickSize(6);

    d3.select("#graphic3")
        .datum(sjc)
        .call(graphic3);

////LAX////
var lax = [{"year":2011, "delay":5.4},
{"year":2012, "delay":7.0},
{"year":2013, "delay":7.2}];
    
    var graphic4 = d3.custom.lineChart()
        .xAccess(function(d) {return d.year; })
        .yAccess(function(d) {return d.delay; })
        .yAxisLabel("LAX")
        .tooltipFormat(d3.format(".f"))
        .strokeWidth(4)
        .aspect(4,3)
        .margin({top:10, left: 60, right: 30, bottom: 20})
        .tooltipString("% delayed")
        .mobileThreshold(300)
        .strokeColor(colors.teal2)
        .yMax(18)
        .tickSize(2)
        .yTickSize(6);

    d3.select("#graphic4")
        .datum(lax)
        .call(graphic4);


}//end function render    





