// Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
// Вход
// От конзолата се четат 2 реда:
// ⦁	Името на архитекта - текст
// ⦁	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
// Изход
// На конзолата се отпечатва:
// ⦁	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."


function projectCreation(input){

    let architechtName = (input[0]);
    let projectsToWorkOn = Number(input[1]);
    let totalHoursNeeded = projectsToWorkOn * 3
    let result = "The architect " + architechtName + " will need "+ totalHoursNeeded +" hours to complete "+ projectsToWorkOn + " project/s.";

    console.log(result)
}
projectCreation(["George", "4"])