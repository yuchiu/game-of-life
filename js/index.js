let interval;

function go(conway) {
    interval = setInterval(function () {
        conway.updateNeighbors();
        conway.updateState();
    }, 0);
}

$(document).ready(function () {
    let size = 50;
    let conway = new Conway(size);
    conway.renderGrid();
    let rowWidth = $('.cell').width() * size;
    $('.row').width(rowWidth);
    $('.cell').on('click', function () {
        $(this).toggleClass('alive');
    });

    //click enter to start
    $('#begin').on("click", function () {
            go(conway);
    });
    $('#pause').on("click", function () {
            clearInterval(interval);
    });
    $('#clear').on("click", function () {
            $('.alive').removeClass('alive');
            clearInterval(interval);
    });
    let isDown = false; // Tracks status of mouse button
    $('.cell').mousedown(function () {
            isDown = true; // When mouse goes down, set isDown to true
        })
        .mouseup(function () {
            isDown = false; // When mouse goes up, set isDown to false
        });

    $('.cell').on('mouseover', function (e) {
        if (isDown) {
            $(this).toggleClass('alive');
        }
    });

});