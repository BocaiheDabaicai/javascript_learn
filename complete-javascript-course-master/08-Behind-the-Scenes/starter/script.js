'use strict';
const a = "aaa";

function first(){
    const b = "bbb";
    function second(){
        const c = "ccc";
        function third(){
            const d = "ddd";
            console.log(d,c,b,a);
        }
        third();
    }
    second();
}
first();