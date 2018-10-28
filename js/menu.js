var menu = {
    isActive: true,

    selectLevel: function (code) {
        var selector = 'span.level';
        switch (code) {
            case 48:
                $(selector).text('0');
                break;
            case 49:
                $(selector).text('1');
                break;
            case 50:
                $(selector).text('2');
                break;
            case 51:
                $(selector).text('3');
                break;
            case 52:
                $(selector).text('4');
                break;
            case 53:
                $(selector).text('5');
                break;
            case 54:
                $(selector).text('6');
                break;
            case 55:
                $(selector).text('7');
                break;
            case 56:
                $(selector).text('8');
                break;
            case 57:
                $(selector).text('9');
                break;
            case 8:
                $(selector).empty();
                break;
            case 13:
                var level = parseInt($(selector).text());
                this.startGame(level);
                break;
        }
    },

    clearScreen: function () {
        $('.contentCenter').remove();
    },

    startGame: function(level) {
        this.clearScreen();
        this.isActive = false;
        main.startGame(level);
    }
};