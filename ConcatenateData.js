// Напишете функция, която получава: име, фамилия, възраст и град и печата съобщение от следния вид: 
// "You are <firstName> <lastName>, a <age>-years old person from <town>."

function concatenateData(input){

    let firstName = (input[0]);
    let lastName = (input[1]);
    let age = (input[2]);
    let town = (input[3]);
    let info = "You are " + firstName +" "+ lastName + ", a " + age + "-years old person from " + town + ".";

    console.log(info);

}
concatenateData(["Maria","Ivanova",20,"Sofia"])