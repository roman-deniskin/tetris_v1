var main = {
    level: 0,
    angle: 0,
    xDelta: 0,//Начальная координата смещения от верхней строки главной матрицы
    yDelta: 5,//Начальная координата смещения от левого столбца главной матрицы
    area: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],

    renderTable: function () {
        var html = '';
        html +=
            '<div id="leftInfo" class="col-md-3">' +
            '<p id="rowAmount">Полных строк: 0</p>' +
            '<p id="level">Уровень: '+this.level+'</p>' +
            '<p id="score">Счёт: 0</p>' +
            '</div>';
        html += '<div class="col-md-4">'
        html += '<table>';
        for (i = 0; i < this.area.length; i++) {
            html += '<tr>';
            for (j = 0; j < this.area[0].length; j++) {
                html += '<td></td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        html += '</div>';
        html +=
            '<div id="rightInfo" class="col-md-3 rightInfo">' +
            '<p>←: НАЛЕВО   →: НАПРАВО</p>' +
            '<p>↑: ПОВОРОТ</p>' +
            '<p>↓: УСКОРИТЬ 5: СБРОСИТЬ</p>' +
            '<p>1: ПОКАЗАТЬ СЛЕДУЮЩУЮ</p>' +
            '<p>0: СТЕРЕТЬ ЭТОТ ТЕКСТ</p>' +
            '<p>ПРОБЕЛ - СБРОСИТЬ</p>' +
            '</div>';
        $('.container').append(html);
    },

    setRandomAngle: function () {
        var angle = [0,90,180,240];
        main.angle = angle[util.getRandomNum(0,3)];
    },

    getFigure: function() {
        var figure = [];
        figure[0] = [
            [1,1,1,1]
        ];
        figure[1] = [
            [2,2,2],
            [2,0,0]
        ];
        figure[2] = [
            [2,2,2],
            [0,0,2]
        ];
        figure[3] = [
            [3,3],
            [3,3]
        ];
        figure[4] = [
            [0,1,1],
            [1,1,0]
        ];
        figure[5] = [
            [0,2,0],
            [2,2,2]
        ];
        figure[6] = [
            [3,3,0],
            [0,3,3]
        ];
        this.setRandomAngle();
        return figure[util.getRandomNum(0,6)];
    },

    colors: [
        '',
        'red',
        'green',
        'blue',
        'yellow'
    ],

    areaRender: function () {
        var className = '';
        for (i = 0; i < this.area.length; i++) {
            for (j = 0; j < this.area[0].length; j++) {
                className = this.colors[this.area[i][j]];
                //console.log(this.area[i][j]+' - '+className);
                $("tr:eq("+i+") td:eq("+j+")").addClass(className);
            }
        }
    },

    cellsCalculator: function () {
        var red = 0, green = 0, blue = 0, yellow = 0;
        for (i = 0; i < this.area.length; i++) {
            for (j = 0; j < this.area[0].length; j++) {
                if (this.area[i][j] == 1) {
                    red++;
                }
                if (this.area[i][j] == 2) {
                    green++;
                }
                if (this.area[i][j] == 3) {
                    blue++;
                }
                if (this.area[i][j] == 4) {
                    yellow++;
                }
            }
        }
        //$('#colorsAmount').replaceWith('<p id="colorsAmount">Red: '+red+' green: '+green+' blue: '+blue+' yellow: '+yellow);
    },

    addFigure: function () {
        var figure = this.getFigure();
        var yOffset = 0;
        var xOffset = 5; // 5 - середина поля по оси x. Начинаем рисование фигуры всегда отсюда
        var yOffsetFigCounter = 0;
        var xOffsetFigCounter = 0;
        var figureHeight = figure.length;
        var figureWidth = figure[0].length;
        for (i = 0; i < 20; i++) {
            // Ось y
            for (j = 0; j < 10; j++) {
                // Ось y
                if (this.area[i][j] != 0 || this.area[i][j] == undefined) {
                    //alert('Figure on the down');
                } else {
                    this.area[i][j] = figure[i][j];
                }
            }
        }
        //this.area[util.getRandomNum(0,20)][util.getRandomNum(0,10)] = util.getRandomNum(1,4);
        this.areaRender();
        this.cellsCalculator();
    },

    appRun: function (level) {
        this.level = level;
        var figure = this.getFigure();
        this.addFigure();
    },

    init: function () {
        this.renderTable();
        this.areaRender();
    },

    startGame: function (level) {
        var timeOut = 0;
        switch (level) {
            case 0:
                timeOut = 1500;
                break;
            case 1:
                timeOut = 1300;
                break;
            case 2:
                timeOut = 1200;
                break;
            case 3:
                timeOut = 1000;
                break;
            case 4:
                timeOut = 900;
                break;
            case 5:
                timeOut = 800;
                break;
            case 6:
                timeOut = 600;
                break;
            case 7:
                timeOut = 450;
                break;
            case 8:
                timeOut = 350;
                break;
            case 9:
                timeOut = 200;
                break;
        }
        main.init();
        setInterval(function () {
            main.appRun();
        }, timeOut);
    }
};
