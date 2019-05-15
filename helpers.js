advice_url = "https://sf-pyw.mosyag.in/m04/api/forecasts"

/*
advice_url = "http://localhost:8080/api/forecasts"
advice_url = "https://api.adviceslip.com/advice"
*/

var dt = new Date();
var time = dt.getFullYear() + "-" + dt.getMonth() + "-" + dt.getDay();
d = $("#dt")
d.html(time)

$("#main-header").click(function() {
    console.log("1: внутри анонимной функции");
    $.getJSON(advice_url, function(data){
        console.log('Вот, что пришло:');
        advice = data["prophecies"];
        set_content_in_divs(advice)
        /*set_secret_message(advice)*/
    })
    console.log("2: после взова внутри анонимной функции");
})

function set_secret_message(msg) {
    p = $("#paragraph");
    p.html(msg);
    p.css("color", "red");
}

function set_content_in_divs(paragraphs) {
    $.each(paragraphs, function(i, d) {
        p = $("#p-" + i)
        p.html("<p>" + d + "</p>")
    })
  }