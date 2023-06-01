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

const firstName = `Bobby`;
function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printInfor(){
        const output = `I'm ${age} years old,my firstName is ${firstName}`;
        console.log(output);

        if (birthYear>= 1983 && birthYear<=1991){
            const info = `You are so old neeee~~`;
            console.log(info);
        }
    }
    printInfor();

    return 2037 - birthYear;
}

first();
calcAge(1990);

const object1 = {
    money:20,
    getMoney:function (){
        console.log(this.money);
    }
}

const object2 = {
    money:15
}

object1.getMoney();
// 直接执行，获取不到方法
// object2.getMoney();

// 方法拷贝，完成执行
// object2.getMoney = object1.getMoney;
// object2.getMoney();

// call 调用，完成执行
object1.getMoney.call(object2);