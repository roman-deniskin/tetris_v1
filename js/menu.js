var menu = {
    setTimeOut: function () {
        $("#level").value
    },

    selectLevel: function (code) {
        var selector = 'span.level';
        if (code === 48 || code === 96)
            $(selector).text('0');
        if (code === 49 || code === 97)
            $(selector).text('1');
        if (code === 50 || code === 98)
            $(selector).text('2');
        if (code === 51 || code === 99)
            $(selector).text('3');
        if (code === 52 || code === 100)
            $(selector).text('4');
        if (code === 53 || code === 101)
            $(selector).text('5');
        if (code === 54 || code === 102)
            $(selector).text('6');
        if (code === 55 || code === 103)
            $(selector).text('7');
        if (code === 56 || code === 104)
            $(selector).text('8');
        if (code === 57 || code === 105)
            $(selector).text('9');
        if (code === 8)
            $(selector).empty();
        if (code === 13) {
            var level = parseInt($(selector).text());
            this.startGame(level);
        }
    },

    clearScreen: function () {
        $('.contentCenter').remove();
    },

    startGame: function(level) {
        this.clearScreen();
        menu = [];//Удаляем объект, чтобы небыло повторных вызовов
        main.startGame(level);
    }
};

$("body").keydown(function(e) {
    console.log(e.keyCode);
    if (menu.selectLevel !== undefined)
        menu.selectLevel(e.keyCode);
    else {
        $("body").off("keydown");
    }
});