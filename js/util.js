/**
 * Created by Роман on 21.10.2018.
 */

var util = {
    getRandomNum: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },

    cellsCalculator: function () {
        var red = 0, green = 0, blue = 0, yellow = 0;
        for (i = 0; i < main.area.length; i++) {
            for (j = 0; j < main.area[0].length; j++) {
                if (main.area[i][j] == 1) {
                    red++;
                }
                if (main.area[i][j] == 2) {
                    green++;
                }
                if (main.area[i][j] == 3) {
                    blue++;
                }
                if (main.area[i][j] == 4) {
                    yellow++;
                }
            }
        }
        $('#colorsAmount').replaceWith('<p id="colorsAmount">Red: '+red+' green: '+green+' blue: '+blue+' yellow: '+yellow);
    },

    getTimeOut: function (level) {
        switch (level) {
            case 0:
                return 10000;
            case 1:
                return 1300;
            case 2:
                return 1200;
            case 3:
                return 1000;
            case 4:
                return 900;
            case 5:
                return 800;
            case 6:
                return 600;
            case 7:
                return 450;
            case 8:
                return 350;
            case 9:
                return 200;
        }
    },
    
    colorCell: function () {
        main.area[util.getRandomNum(0,main.area.length)][util.getRandomNum(0,main.area[0].length)] = util.getRandomNum(1,main.colors.length);
    },
    
    cellsForeach: function () {
        for (i = 0; i < main.figureHeight; i++) {
            for (j = 0; j < main.figureWidth; j++) {

            }
        }
    }
};