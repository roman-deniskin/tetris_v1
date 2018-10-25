var main = {
    level: 0,
    angle: 0,
    xDelta: 5, //Начальная координата смещения от верхней строки главной матрицы
    yDelta: 0, //Начальная координата смещения от левого столбца главной матрицы. 5 - середина поля по оси x. Начинаем рисование фигуры всегда отсюда
    figureHeight: 0, //Высота текущей фигуры
    figureWidth: 0, //Ширина текущей фигуры
    currentFigure: [],
    areaCopy: [],
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
        //return figure[0];
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
                if (this.area[i][j] > 0)
                    $("tr:eq("+i+") td:eq("+j+")").addClass(className);
                if (this.area[i][j] === 0)
                    $("tr:eq("+i+") td:eq("+j+")").removeClass();
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

    moveDownFigure: function () {
        this.areaCopy = this.area.slice();
        for (i = 0; i < 20; i++) {
            for (j = 0; j < 10; j++) {
                this.area[i][j] = 0; //Обнуляем изменения основного поля
            }
        }
        if (this.figure !== []) {
            for (i = 0; i < this.figureHeight; i++) {
                for (j = 0; j < this.figureWidth; j++) {
                    if (this.area[i + this.yDelta][j + this.xDelta] !== 0) {
                        //Offset - параметры отступа фигуры на экране
                        //i, j - высота и длина фигуты на экране
                        if (this.area[i + this.yDelta][j + this.xDelta] > 0 && this.figure !== []) {
                            this.figure = [];
                            this.areaCopy = [];
                            return 'Field is full';
                        }
                        return 'Field is not exists';
                    }
                    else {
                        this.area[i + this.yDelta][j + this.xDelta] = this.figure[i][j];
                    }
                }
            }
            this.yDelta++;
        } else if (!(isCreateNewFigure = this.addFigure())) {
            alert('Game over');
        }
    },

    addFigure: function () {
        this.areaCopy = this.area.slice(); //Копируем поле до изменений
        this.figure = this.getFigure();
        this.figureHeight = main.figure.length;
        this.figureWidth = main.figure[0].length;
        if (this.figure !== []) {
            for (i = 0; i < this.figureHeight; i++) {
                for (j = 0; j < this.figureWidth; j++) {
                    if (this.area[i + this.yDelta][j + this.xDelta] !== 0) {
                        //Offset - параметры отступа фигуры на экране
                        //i, j - высота и длина фигуты на экране
                        if (this.area[i + this.yDelta][j + this.xDelta] > 0) {
                            alert('Field is full');
                            return 'Field is full';
                        }
                        alert('Field is not exists');
                        //return 'Field is not exists';
                    }
                    else {
                        this.area[i + this.yDelta][j + this.xDelta] = this.figure[i][j];
                    }
                }
            }
        }
        //this.area[util.getRandomNum(0,20)][util.getRandomNum(0,10)] = util.getRandomNum(1,4);
        this.cellsCalculator();
        delete figure;
    },

    appRun: function (level) {
        this.level = level;
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
        main.appRun();
        main.addFigure();
        setInterval(function () {
            main.moveDownFigure();
        }, timeOut);//Почему не происходит синхронного выполнения команд?
        setInterval(function () {
            main.areaRender();
        }, 100);
    }
};
