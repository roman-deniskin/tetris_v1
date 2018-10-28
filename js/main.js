var main = {
    colors: [
        '',
        'red',
        'green',
        'blue',
        'yellow'
    ],
    level: 0,
    angle: 0,
    xDelta: 5, //Начальная координата смещения текущей фигуры от верхней строки главной матрицы
    yDelta: 0, //Начальная координата смещения текущей фигуры от левого столбца главной матрицы. 5 - середина поля по оси x. Начинаем рисование фигуры всегда отсюда
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

    moveDownFigure: function () {
        if ((this.yDelta+this.figure.length) < this.area.length) {
            this.yDelta++;
            this.changePosFigure();
        }
    },

    addFigure: function () {
        this.areaCopy = this.area.slice(); //Копируем поле до изменений
        this.figure = this.getFigure();
        this.figureHeight = main.figure.length;
        this.figureWidth = main.figure[0].length;
        for (i = 0; i < this.figureHeight; i++) {
            for (j = 0; j < this.figureWidth; j++) {
                if (this.area[i + this.yDelta][j + this.xDelta] !== 0 && this.area[i + this.yDelta][j + this.xDelta] !== undefined) {
                    //Offset - параметры отступа фигуры на экране
                    //i, j - высота и длина фигуты на экране
                    if (this.area[i + this.yDelta][j + this.xDelta] > 0) {
                        //alert('Field is full');
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
        
        util.cellsCalculator();
    },

    changePosFigure: function () {
        this.areaCopy = this.area.slice();
        for (i = 0; i < 20; i++) {
            for (j = 0; j < 10; j++) {
                this.area[i][j] = 0; //Обнуляем изменения основного поля
            }
        }
        if (this.figure !== []) {
            for (i = 0; i < this.figureHeight; i++) {
                for (j = 0; j < this.figureWidth; j++) {
                    if (this.area[i + this.yDelta][j + this.xDelta] !== 0 && this.area[i + this.yDelta][j + this.xDelta] !== undefined) {
                        //Offset - параметры отступа фигуры на экране
                        //i, j - высота и длина фигуты на экране
                        if (this.area[i + this.yDelta][j + this.xDelta] > 0 && this.figure !== []) {
                            this.figure = [];
                            this.area = this.areaCopy.slice();
                            //this.areaCopy = [];
                            return 'Field is full';
                        }
                        return 'Field is not exists';
                    }
                    else {
                        if (this.area[i + this.yDelta][j + this.xDelta] === 0)
                            this.area[i + this.yDelta][j + this.xDelta] = this.figure[i][j];
                    }
                }
            }
        } else if (!(isCreateNewFigure = this.addFigure())) {
            alert('Game over');
        }
        this.areaRender();
    },

    init: function () {
        this.renderTable();
        this.areaRender();
    },

    startGame: function (level) {
        var timeOut = util.getTimeOut(level);

        main.init();
        main.addFigure();
        setInterval(function () {
            if (main.yDelta+main.figure.length < main.area.length)
                main.moveDownFigure();
            else {
                main.figure = main.addFigure();
                main.xDelta = 5;
                main.yDelta = 0;
                main.addFigure();
            }

        }, timeOut);
        setInterval(function () {
            main.areaRender();
        }, 100);
    }
};