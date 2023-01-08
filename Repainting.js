// Вход
// Входът се чете от конзолата и съдържа точно 4 реда:
// ⦁	Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]
// ⦁	Необходимо количество боя (в литри) - цяло число в интервала [1…100]
// ⦁	Количество разредител (в литри) - цяло число в интервала [1…30]
// ⦁	Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
// Изход
// Да се отпечата на конзолата един ред:
// ⦁	"{сумата на всички разходи}"

function Repainting(input){

let nylonNeeded = Number(input[0]);
let paintNeeded = Number(input[1]);
let thinnerNeeded = Number(input[2]);
let hoursWorked = Number(input[3]);

let additionlPaint = paintNeeded * 0.1;
let totalPaintQuantity = paintNeeded + additionlPaint
let totalNylonQuantity = nylonNeeded + 2

let nylonPrice = totalNylonQuantity * 1.5;
let paintPrice = totalPaintQuantity * 14.5;
let thinnerPrice = thinnerNeeded * 5;

let totalMaterialPrice = nylonPrice + paintPrice + thinnerPrice + 0.4;
let workPricePerHour = 0.3 * totalMaterialPrice
let PriceOfWork = workPricePerHour * hoursWorked

expenseSum = totalMaterialPrice + PriceOfWork

console.log(expenseSum)
}
Repainting(["10", "11", "4", "8"])