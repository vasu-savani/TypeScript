"use strict";
// let fruit = "apple";
// fruit = 33
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
