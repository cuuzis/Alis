$(document).ready( function () {
    var side = "left";
    $("li").each( function () {
        $(this).addClass(side);
        if (side == "left")
            side = "right"
        else
            side = "left";
    });
});