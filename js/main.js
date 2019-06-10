'use strict'
let board = document.querySelector('#board');
let context = board.getContext('2d');
let pen_switch = false;
let eraser_switch = false;
let mouse_down = false;
let color_select = document.querySelector('#color_select');
let pen_btn = document.querySelector('.btn1');
let eraser_btn = document.querySelector('.btn2');
context.fillStyle = color_select.value;

color_select.addEventListener('change', function () {
    context.fillStyle = color_select.value;
})

pen_btn.addEventListener('click', function () {
    eraser_switch = false;
    pen_switch = true;

});


eraser_btn.addEventListener('click', function () {
    eraser_switch = true;
    pen_switch = false;

});

reset_board();
window.onresize = function () {
    reset_board();
};

function paint(x, y) {
    context.fillRect(x, y, 10, 10);
}

function erase(x, y) {
    context.clearRect(x, y, 10, 10);
}


function reset_board() {
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    board.setAttribute('width', width);
    board.setAttribute('height', height);
}

board.addEventListener('touchstart', function () {
    mouse_down = true;
})

board.addEventListener('mousedown', function () {
    mouse_down = true;
});

board.addEventListener('mouseup', function () {
    mouse_down = false;
});

board.addEventListener('touchend', function () {
    mouse_down = false;
})

board.addEventListener('mousemove', function (e) {
    if (pen_switch == true && eraser_switch == false && mouse_down) {
        paint(e.clientX, e.clientY);
    } else if (pen_switch == false && eraser_switch == true && mouse_down) {
        erase(e.clientX, e.clientY);
    }
});

board.addEventListener('touchmove', function (e) {
    if (pen_switch == true && eraser_switch == false) {
        paint(e.touches[0].pageX, e.touches[0].pageY);
    } else if (pen_switch == false && eraser_switch == true && mouse_down) {
        erase(e.touches[0].pageX, e.touches[0].pageY);
    }
});
