var main = {
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
        for (i = 0; i < 20; i++) {
            for (j = 0; j < 10; j++) {
                className = this.colors[this.area[i][j]];
                $("tr:eq("+i+") td:eq("+j+")").addClass(className);
            }
        }
        this.area;
    },

    renderFigure: function () {
        var figure = this.getFigure();
        
    },

    appRun: function () {

    },

    init: function () {
        this.areaRender();
    }
};

main.init();
setInterval(function () {
    main.appRun();
}, 1000);