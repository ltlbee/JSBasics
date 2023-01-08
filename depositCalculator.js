//⦁	Депозирана сума – реално число в интервала [100.00 … 10000.00]
//⦁	Срок на депозита (в месеци) – цяло число в интервала [1…12]
//⦁	Годишен лихвен процент – реално число в интервала [0.00 …100.00]
// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

function depositCalculator(input){

let depositSum = Number(input[0]);

let term = Number(input[1]);

let interestPercent = Number(input[2]);

let interest = interestPercent / 100

let endSum = depositSum + term * (( depositSum * interest ) / 12 );

console.log(endSum);

}
depositCalculator(["200", "3","5.7"])

