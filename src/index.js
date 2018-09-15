/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


    var i = 0, kol = 0, elem1, elem2, elem3, elem4;

    while (i < preferences.length) {

        if ( preferences[i] >= 0 ) {
            elem1 = preferences[i];
            elem2 = preferences[elem1 - 1];
            elem3 = preferences[elem2 - 1];
            elem4 = preferences[elem3 - 1];

            if ((elem1 === elem4) && (elem1 !== elem2) && (elem2 !== elem3)) {
                kol = kol + 1;
                preferences[i] = -1;
                preferences[elem1 - 1] = -1;
                preferences[elem2 - 1] = -1;
            }
        }
        i++;
    }


   // alert( kol );

    return kol;
};
