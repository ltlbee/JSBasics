// От конзолата се четат 4 реда:
// ⦁	Дължина в см – цяло число в интервала [10 … 500]
// ⦁	Широчина в см – цяло число в интервала [10 … 300]
// ⦁	Височина в см – цяло число в интервала [10… 200]
// ⦁	Процент  – реално число в интервала [0.000 … 100.000]
// Изход
// Да се отпечата на конзолата едно число:
// ⦁	литрите вода, които ще събира аквариума.


function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;

    let totalVolumeInCm = length * width * height;
    let totalVolumeinL = totalVolumeInCm / 1000;

    let volumeTaken = percentTaken * totalVolumeinL;
    let volumeLeft = totalVolumeinL - volumeTaken;

    console.log(volumeLeft);
}
fishTank(["85","75","47","17"])