// ⦁	Пакет химикалKи - 5.80 лв. 
// ⦁	Пакет маркери - 7.20 лв. 
// ⦁	Препарат - 1.20 лв (за литър)
// Вход
// От конзолата се четат 4 числа:
// ⦁	Брой пакети химикалKи - цяло число в интервала [0...100]
// ⦁	Брой пакети маркери - цяло число в интервала [0...100]
// ⦁	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// ⦁	Процент намаление - цяло число в интервала [0...100]
// Изход
// Да се отпечата на конзолата колко пари ще са нужни на Ани, за да си плати сметката.


function SchoolSuppliesCalculator(input){
    let packPens = Number(input[0]);
    let packMarkers = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let Rabat = Number(input[3])/100;

    let PensPackPrice = 5.8
    let MarkersPackPrice = 7.2
    let DetergetnPerLiter = 1.2

    let totalSumForMatrials = ((packPens * PensPackPrice) + (packMarkers * MarkersPackPrice) + (litersDetergent * DetergetnPerLiter));
    let totalSumNeeded = totalSumForMatrials - (totalSumForMatrials*Rabat);

    console.log(totalSumNeeded)
}
SchoolSuppliesCalculator(["2","3","4","25"])