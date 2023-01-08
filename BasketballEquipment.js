// Джеси решава, че иска да се занимава с баскетбол, но за да тренира е нужна екипировка. Напишете програма, която изчислява какви разходи ще има Джеси, 
//ако започне да тренира, като знаете колко е таксата за тренировки по баскетбол за период от 1 година. Нужна екипировка: 
// ⦁	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// ⦁	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// ⦁	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// ⦁	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
// Вход
// От конзолата се четe 1 ред:
// ⦁	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]
// Изход
// Да се отпечата на конзолата колко ще са разходите на Джеси, ако започне да спортува баскетбол.

function basketballEquipment(input){

    let annualTrainingFee = Number(input[0]);

    let shoes = annualTrainingFee - (0.4 * annualTrainingFee);

    let outfit = shoes - (0.2 * shoes);
    let ball = 1/4 * outfit;
    let accesories = 1/5 * ball;
    let annualExpenses = annualTrainingFee + shoes + outfit + ball + accesories;

    console.log(annualExpenses)

}
basketballEquipment(["365"])