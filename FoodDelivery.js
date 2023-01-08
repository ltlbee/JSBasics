// Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
// ⦁	Пилешко меню –  10.35 лв. 
// ⦁	Меню с риба – 12.40 лв. 
// ⦁	Вегетарианско меню  – 8.15 лв. 
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
// Цената на доставка е 2.50 лв и се начислява най-накрая.  
// Вход
// От конзолата се четат 3 реда:
// ⦁	Брой пилешки менюта – цяло число в интервала [0 … 99]
// ⦁	Брой менюта с риба – цяло число в интервала [0 … 99]
// ⦁	Брой вегетариански менюта – цяло число в интервала [0 … 99]
// Изход
// Да се отпечата на конзолата един ред:  "{цена на поръчката}"


function FoodDelivery(input){

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veggieMenuPrice = 8.15;

    let allMenusPrice = (chickenMenus * chickenMenuPrice) + (fishMenus *fishMenuPrice) + (veggieMenus * veggieMenuPrice);
    let dessertPrice = 0.2 * allMenusPrice;
    let delivery = 2.5;

    let orderPrice = allMenusPrice + dessertPrice + delivery;

    console.log(orderPrice)
}
FoodDelivery(["2","4","3"])