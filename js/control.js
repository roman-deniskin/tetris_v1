/**
 * Created by Роман on 28.10.2018.
 */

var control = {
    leftShift: function () {
        if (main.xDelta > 0) {
            main.xDelta-=1;
            main.changePosFigure();
        }
    },

    rightShift: function () {
        if (main.xDelta+main.figure[0].length < main.area[0].length) {
            main.xDelta+=1;
            main.changePosFigure();
        }
    },

    downShift: function () {
        if (main.yDelta+main.figure.length < main.area.length) {
            main.yDelta+=1;
            main.changePosFigure();
        }
    },

    changePauseState: function () {
        if (main.isPause == false)
            main.isPause = true;
        else
            main.isPause = false;
    },

    moveFigure: function (code) {
        switch (code) {
            case 37:
                //left
                this.leftShift();
                break;
            case 39:
                //right
                this.rightShift();
                break;
            case 40:
                //down
                this.downShift(+1);
                break;
            case 38:
                //up
                break;
            case 32:
            case 19:
                alert('ddd');
                // space and pause
                this.changePauseState();
                break;
        }
    }
};
