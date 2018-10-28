/**
 * Created by Роман on 27.10.2018.
 */
"use strict";

$(document).ready(function() {
    $("body").keydown(function (e) {
        console.log(e.keyCode);
        if (menu.isActive == true)
            menu.selectLevel(e.keyCode);
        if (menu.isActive == false) {
            control.moveFigure(e.keyCode);
        }
    });
});