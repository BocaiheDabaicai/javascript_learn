'strict mode'
const budget = [
    {value: 250, description: 'Sold old TV 📺', user: 'jonas'},
    {value: -45, description: 'Groceries 🥑', user: 'jonas'},
    {value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas'},
    {value: 300, description: 'Freelancing 👩‍💻', user: 'jonas'},
    {value: -1100, description: 'New iPhone 📱', user: 'jonas'},
    {value: -20, description: 'Candy 🍭', user: 'matilda'},
    {value: -125, description: 'Toys 🚂', user: 'matilda'},
    {value: -1800, description: 'New Laptop 💻', user: 'jonas'},
];

const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
});

// const limit = spendingLimits[user]?spendingLimits[user]:0;
const getLimit = (limits,user) => limits?.[user] ?? 0;

// 纯函数
const addExpense = function (state, limits, value, description, user = 'jonas') {

    const clearUser = user.toLowerCase();

    return value <= getLimit(limits,clearUser) ? [...state, {value: -value, description: description, user: clearUser}] : state

};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget1)
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

console.log(budget);

const checkExpense =  (state,limits) => state.map(entry => {return entry.value < -getLimit(limits,entry.user) ? {...entry,flag:'limit'}:entry;})

const finalBudget = checkExpense(newBudget3,spendingLimits);
console.log(finalBudget)

const logBigExpenses = function (state,bigLimit) {

    const bigExpenses = state
        .filter(entry => entry.value <= -bigLimit)
        .reduce((string,entry) => `${string} / ${entry.description.slice(-2)}`,'')

    console.log(bigExpenses)
};

console.log(budget)
logBigExpenses(finalBudget,500)