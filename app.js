'use strict';
/*
* トリボナッチ関数
*/

'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
let tob = (n) => {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = tob(n - 1) + tob(n - 2) + tob(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(tob(i));
}