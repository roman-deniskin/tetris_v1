/**
 * Created by Роман on 21.10.2018.
 */

var util = {
    getRandomNum: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    },
    
    arrayClone: function (array) {
        for (i in array) {
            if (typeof array[i] == 'source')
                this[i] = new this.arrayClone(array[i]);
            else
                this[i] = array[i];
        }
    }
};
