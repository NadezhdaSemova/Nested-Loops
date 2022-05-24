function cinemaTickets(input) {
  let index = 0;
  let nameMovie = String(input[index]);
  index++;
  let counter = 0;
  let counterStudent = 0;
  let counterStandart = 0;
  let counterKid = 0;
  let freeSeats = Number(input[index]);
  index++;
  let type = String(input[index]);
  index++;
  while (nameMovie !== "Finish") {
    let counterMovie = 0;
    while (type !== "End") {
      counter++;
      counterMovie++;
      switch (type) {
        case "student":
          counterStudent++;
          break;
        case "standard":
          counterStandart++;
          break;
        case "kid":
          counterKid++;
          break;
      }
      if (counterMovie === freeSeats) {
        break;
      }
      type = String(input[index]);
      index++;
    }
    let percentFree = (counterMovie / freeSeats) * 100;
    console.log(`${nameMovie} - ${percentFree.toFixed(2)} % full`);
    nameMovie = String(input[index]);
    index++;
    freeSeats = Number(input[index]);
    index++;
    type = String(input[index]);
    index++;
  }
  let percentStudent = (counterStudent / counter) * 100;
  let percentStandard = (counterStandart / counter) * 100;
  let percentKid = (counterKid / counter) * 100;
  console.log(`Total tickets: ${counter}`);
  console.log(`${percentStudent.toFixed(2)} student tickets`);
  console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])