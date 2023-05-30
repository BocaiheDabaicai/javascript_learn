## 第3章

### 项目一：猜猜我的数字

#### 前置内容

DOM:代表文档对象模型，HTML的文档结构表示

#### 项目

内容：开发一个猜数字的游戏

具体实现：

1. 输入数据、检测数据，并返回判断

2. 记录操作次数，每操作一次，得分减一

3. 正确时，改变`body`背景颜色，并使猜测按钮失效

4. 重置按钮，操作记录复原、背景颜色改变为黑色

5. 正确数字显示为`?`，正确猜测后显示，错误不显示，重置后显示`?`

6. 显示最高得分`TobScore`，重置不改变最高得分，猜测正确后检测最高得分

#### 页面截图:

1. 开始游戏

![开始游戏](../complete-javascript-course-master/05-Guess-My-Number/starter/pictures/1_start.png "开始游戏")

2. too low

![低于正确数字](../complete-javascript-course-master/05-Guess-My-Number/starter/pictures/2_tooLow.png "低于正确数字")

3. too high

![高于正确值](../complete-javascript-course-master/05-Guess-My-Number/starter/pictures/3_tooHigh.png "高于正确值")

4. correct

![猜测正确](../complete-javascript-course-master/05-Guess-My-Number/starter/pictures/4_correct.png "猜测正确")

5. again

![重新开始](../complete-javascript-course-master/05-Guess-My-Number/starter/pictures/5_again.png "重新开始")

代码如下:

```js
// 设置正确数字
let number = Math.trunc(Math.random()*20 + 1);
console.log("number: ",number);

// check 设置事件监听器，类型为点击事件
document.querySelector(".check").addEventListener("click",function(){
    let guess = document.querySelector(".guess");        // 猜测值    
    let score = document.querySelector(".score");        // 得分
    let message = document.querySelector(".message");    // 提示信息
    let Topnumber = document.querySelector(".number");    // 顶部数字
    let highscore = document.querySelector(".highscore");    // 最高得分
    let check = document.querySelector(".check");        // 猜测按钮

    if(!guess.value) {
    // 未输入数字，设置提示信息
        message.textContent = "😓 no Number."
    }else{
        if (Number(guess.value) > number) {
        // 猜测数字过大
            score.textContent = Number(score.textContent) - 1;
            message.textContent = "📈 too high.";
        } else if (Number(guess.value) < number) {
        // 猜测数字过小
            score.textContent = Number(score.textContent) - 1;
            message.textContent = "📉 too low.";
        } else {
        // 正确情况
        // 设置提示信息
        // 判断最高分数
        // 设置顶部数字
        // 禁用猜测按钮
        // 设置body颜色
            message.textContent = "🎉correct number!";
            if (highscore.textContent === "0") {
                highscore.textContent = score.textContent;
            } else if (highscore.textContent < score.textContent)
                highscore.textContent = score.textContent;
            Topnumber.textContent = guess.value;
            check.disabled = true;
            document.body.style.backgroundColor = "#60b347";
        }
    }
})

// again 设置事件监听器，类型为点击事件
document.querySelector(".again").addEventListener("click",function(){
    // 重新获得正确数字
    number = Math.trunc(Math.random()*20 + 1);
    console.log(number);
    // 重置得分、提示消息、猜测数字、顶部数字、body背景颜色
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".check").disabled = false;
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.body.style.backgroundColor = "#222";
})
```

> Tips:
> 
> 1. 可以继续实现得分为0时的失败信息
> 
> 2. 实现代码重构，将冗余的代码通过函数方法进行调用

---

### 项目二：模态框

内容：实现一个模态框

具体实现:

1. 按钮触发遮盖层、模态框的显现

2. 模态框的按钮触发隐藏遮盖层、模态框的显现

3. 监听事件（遮盖层、模态框按钮、`ESC`）触发显现事件

#### 页面截图

1. 开始页面

![开始页面](../complete-javascript-course-master/06-Modal/starter/pictures/1_start.png "开始页面")

2. 模态框

![模态框](../complete-javascript-course-master/06-Modal/starter/pictures/2_modal.png "模态框")

代码如下:

```js
const modal = document.querySelector('.modal');    // 获取模态框
const overlay = document.querySelector('.overlay'); // 获取遮盖层
const btnCloseModal = document.querySelector('.close-modal');    // 关闭模态框
const btnsOpenModal = document.querySelectorAll('.show-modal');    // 开启模态框

const clickOpenListener = function () {
    // modal.classList.remove("hidden","...")  删除多个类选择器语法
    // 打开模态框、遮盖层
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const clickCloseListener = function () {
    // 关闭模态框、遮盖层
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    // 按钮数组添加监听事件，打开模态框
    btnsOpenModal[i].addEventListener("click", clickOpenListener);
}

// 模态框按钮添加监听事件，关闭模态框
btnCloseModal.addEventListener("click", clickCloseListener);
// 遮盖层按钮添加监听事件，关闭模态框
overlay.addEventListener("click", clickCloseListener);
// 键盘添加监听事件，关闭模态框
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) clickCloseListener();
});
```

---

### 项目三：掷色子

内容：

实现一个页面，分配两名玩家，分别掷色子，掷出2-6点统计为本轮的总得分，掷出1点则切换为另一位玩家，且本轮总得分记为0，通过`hold`按钮将本轮得分记为总得分，总得分超过10分则获胜，未超过则切换为另一位玩家，同时本轮总得分记为0，点击`reset`按钮开启下一轮游戏。

实现截图:

1. 开始游戏

![开始页面](../complete-javascript-course-master/07-Pig-Game/starter/pictures/1_start.png "开始页面")

2. 掷色子

![掷色子](../complete-javascript-course-master/07-Pig-Game/starter/pictures/2_dice.png "掷色子")

3. 获取得分

![获取得分](../complete-javascript-course-master/07-Pig-Game/starter/pictures/3_hold.png "获取得分")

4. 获胜者

![获胜者](../complete-javascript-course-master/07-Pig-Game/starter/pictures/4_winner.png "获胜者")

5. 重新开始

![重新开始](../complete-javascript-course-master/07-Pig-Game/starter/pictures/5_reset.png "重新开始")

#### 实现代码

```js
const score0 = document.querySelector("#score--0");    // 记录玩家0的总得分
const score1 = document.getElementById("score--1");    // 记录玩家1的总得分
const currentScore0 = document.getElementById("current--0");    // 记录玩家0的当前得分
const currentScore1 = document.getElementById("current--1");    // 记录玩家1的当前得分

const dice = document.querySelector(".dice");    // 记录色子
const buttonRoll = document.querySelector(".btn--roll");    // 扔色子按钮
const buttonNew = document.querySelector(".btn--new");    // 重新开始按钮
const buttonHold = document.querySelector(".btn--hold");    // 提交得分按钮

const players = document.querySelectorAll(".player");    // 获取玩家板块数组
let switchIndex = false;    // 切换激活的玩家

// 初始化，设置玩家得分为0，并隐藏中间的色子，当前得分为0
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");

let currentScore = 0;

// 切换激活者状态
const changeActive = function(){
    switchIndex?currentScore1.textContent = 0:currentScore0.textContent = 0;
    players[0].classList.toggle("player--active");
    players[1].classList.toggle("player--active");
    switchIndex=!switchIndex;
    currentScore = 0;
}

// 检测总得分是否超过10，确定获胜者
const inspectChampion = function(index){
    if(Number(document.querySelector(`#score--${index}`).textContent)>=10) {
        players[index].classList.add("player--winner");
        buttonRoll.disabled = true;
        buttonHold.disabled = true;
        dice.classList.add("hidden");
    }else{
        changeActive();
    }
}

// 监听掷色子按钮，事件为点击，随机获取一个点数，并进行判断
buttonRoll.addEventListener("click", function () {
    const randomRoll = Math.trunc(Math.random() * 6 + 1);

    dice.classList.remove("hidden");
    dice.src = `dice-${randomRoll}.png`;

    if(randomRoll !== 1){
        currentScore += randomRoll;
        // currentScore0.textContent = currentScore;
        switchIndex?currentScore1.textContent = currentScore:currentScore0.textContent = currentScore;
    }else{
        changeActive()
    }
})

// 监听提交按钮，事件为点击，当前得分记为总得分，并进行获胜者判断
buttonHold.addEventListener("click",function () {
    if (players[0].classList.contains("player--active")){
        score0.textContent = Number(score0.textContent) + currentScore;
        inspectChampion(0);
    }else{
        score1.textContent = Number(score1.textContent)+currentScore;
        inspectChampion(1);
    }
})

// 监听重置按钮，事件为点击，重新开始游戏
buttonNew.addEventListener("click",function(){
    for (let i = 0; i < players.length; i++) {
        document.querySelector(`#score--${i}`).textContent = 0;
        document.querySelector(`#current--${i}`).textContent = 0;
        players[i].classList.remove("player--winner");
    }
    buttonRoll.disabled = false;
    buttonHold.disabled = false;
    players[0].classList.add("player--active");
    players[1].classList.remove("player--active");
    switchIndex = false;
    currentScore = 0;
})
```

---

#### 收获总结

```js
// 获取DOM对象
let test1 = document.querySelector(".类名 #id名");
let test2 = document.querySelectorAll(".类名 #id名");    //返回数组
let test3 = document.getElementById("id名");

// DOM对象操作
test1.classList    // 获取类列表
test1.classList.add()
test1.classList.remove()
test1.classList.toggle()
test1.classList.contain()


// 事件监听，一般用于按钮
// 事件类型: 鼠标事件||焦点事件||键盘事件||文本事件
button.addEventListener("事件类型",function(){
    // 触发函数
})
```