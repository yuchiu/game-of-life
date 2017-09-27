let interval;

function start(conway) {
    interval = setInterval(function () {
        conway.updateNeighbors();
        conway.updateState();
    }, 0);
}

$(document).ready(function () {
    let conway = setupGrid();
    let isStart = false; //status of start/pause button
    let isDown = false; // status of mouse click 

    let $cell = $('.cell');
    let $toggle = $('#toggle');
    let $clear = $('#clear');
    let $reset = $('#reset');

    $($cell).on('click', function () {
        $(this).toggleClass('alive');
    });
    
    //click enter to start
    $toggle.on("click", function () {
        if(!isStart){
            isStart = true;
            $toggle.html('pause')
            start(conway);
        }
        else{
            isStart = false
            clearInterval(interval);
            $toggle.html('start')
        }
    });
    $clear.on("click", function () {
            $('.alive').removeClass('alive');
            clearInterval(interval);
    });
    $reset.on("click", function () {
        conway.removeGrid();
        setupGrid();
    });
    $($cell).mousedown(function () {
            isDown = true;
        })
        .mouseup(function () {
            isDown = false;
        });
    
    $($cell).on('mouseover', function (e) {
        if (isDown) {
            $(this).toggleClass('alive');
        }
    });
});

function setupGrid(){    
    let size = 60;
    let conway = new Conway(size);
    conway.renderGrid();
    let rowWidth = $('.cell').width() * size;
    $('.row').width(rowWidth);
    return conway;
}
