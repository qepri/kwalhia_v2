$(document).ready(function(){
    var websites = [
        "hypersigil.html",
        "hypersigil2.html",
        "hyper3.html",
        "hyper4.html",
        "hyper5.html"
      
    ];

    $("#reload").click(function() {
        var randomWebsiteIndex = Math.floor(Math.random() * websites.length);
        $(".mindsun").attr("src", websites[randomWebsiteIndex]);
    });
});

$(document).ready(function() {
  $("#hide").click(function() {
    $(".portales").toggle();
  });
});
