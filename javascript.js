
$(document).ready(function () {

    // Mouse enters an icon
    $(".website-icon").on("mouseenter", function () {

        let name = $(this).data("name");

        $("#in").append(name + " ");

        $(this).css("opacity", 0.5);
    });


    // Mouse leaves an icon
    $(".website-icon").on("mouseleave", function () {

        let name = $(this).data("name");

        $("#out").append(name + " ");

        $(this).css("opacity", 1.0);

        $("#enlarged-icon").hide();
    });


    // Double-click an icon to open its website
    $(".website-icon").on("dblclick", function () {

        let url = $(this).data("url");

        window.open(url, "_blank");
    });


    // Single-click an icon to display an enlarged version
    $(".website-icon").on("click", function (event) {

        let iconSource = $(this).attr("src");

        $("#enlarged-icon")
            .attr("src", iconSource)
            .css({
                left: event.pageX + 15,
                top: event.pageY + 15
            })
            .show();
    });


    // Track mouse movement inside the span
    $("#icon-container").on("mousemove", function (event) {

        let x = event.pageX;
        let y = event.pageY;

        $("#coordinates").text("Mouse X: " + x + ", Y: " + y);
    });

});
