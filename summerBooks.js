// ⦁	Брой страници в текущата книга – цяло число в интервала [1…1000]
// ⦁	Страници, които прочита за 1 час – цяло число в интервала [1…1000]
// ⦁	Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]

function vacationBookList(input){

let pagesCount = Number(input[0]);

let pagesPerHour = Number(input[1]);

let daysToRead = Number(input[2]);

let hoursToRead = pagesCount / pagesPerHour / daysToRead;

console.log(hoursToRead);
}
vacationBookList(["212","20","2"])