var menu = {
    setTimeOut: function () {
        $("#level").value
    },

    selectLevel: function (code) {
        var selector = 'span.level';
        if (code === 48)
            $(selector).text('0');
        if (code === 49)
            $(selector).text('1');
        if (code === 50)
            $(selector).text('2');
        if (code === 51)
            $(selector).text('3');
        if (code === 52)
            $(selector).text('4');
        if (code === 53)
            $(selector).text('5');
        if (code === 54)
            $(selector).text('6');
        if (code === 55)
            $(selector).text('7');
        if (code === 56)
            $(selector).text('8');
        if (code === 57)
            $(selector).text('9');
        if (code === 8)
            $(selector).empty();
        if (code === 13)
            this.startGame(code);
    },

    clearScreen: function () {
        $('.contentCenter').remove();
    },

    startGame: function(level) {
        this.clearScreen();
        main.startGame(level);
        menu = [];//Удаляем объект, чтобы небыло повторных вызовов
    }
};

$("body").keydown(function(e) {
    menu.selectLevel(e.keyCode);
    console.log(e.keyCode);
});