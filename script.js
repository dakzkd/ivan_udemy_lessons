let money; 
let time; 

money = +prompt("Ваш бюджет на месяц?"," ");
console.log(money);
time = prompt("Введите дату в формате YYYY-MM-DD"," ");
console.log(time);
console.log(time);

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// appData.budjet = money;
// appData.timeData = time;
console.log(appData.budjet);
console.log(appData.timeData);



for (let i = 0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '')
        
    if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null  && a != "" && b != "" && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
    }
}

appData.moneyPerDay = appData.budjet / 30; 

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}