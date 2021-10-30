$(function() {
    AOS.init();
});


$.ajax("/campushiring.csv", {
    success: function(data) {
        var csv = d3.csv.parse(data);
        console.table(csv);
    }
});
var chart = new dimple.chart(svg, csv);
chart.addCategoryAxis("x", "Company Name");
chart.addMeasureAxis("y", "No. of Offers");
chart.addSeries(null, dimple.plot.bar);
chart.draw();