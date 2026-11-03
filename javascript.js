
$(document).ready(function () {

    $(".website-icon").on("mouseenter", function () {

        let name = $(this).data("name");

        $("#in").text("in " + name + " ");

        $(this).css("opacity", 0.5);
    });

    $(".website-icon").on("mouseleave", function () {

        let name = $(this).data("name");

        $("#out").text("out "name + " ");

        $(this).css("opacity", 1.0);

        $("#enlarged-icon").hide();
    });

    $(".website-icon").on("dblclick", function () {

        let url = $(this).data("url");

        window.open(url, "_blank");
    });

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

    $("body").on("mousemove", function (event) {

        let x = event.pageX;
        let y = event.pageY;

        $("#coordinates").text("Mouse X: " + x + ", Y: " + y);
    });

});
