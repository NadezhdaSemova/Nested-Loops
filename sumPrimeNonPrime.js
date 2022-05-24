function sumPrimeNonPrime(input) {
  let numberText = String(input[0]);
  let index = 1;

  let sumPrime = 0;
  let sumNonPrime = 0;

  while (numberText !== "stop") {
    let num = Number(numberText);
    if (num < 0) {
      console.log("Number is negative.");
      numberText = input[index];
    index++;
      continue;
    }
    let end = true;
    for (let i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
        sumNonPrime += num;
        end = false;
        break;
      }
    }
    if (end) {
      sumPrime += num;
    }
    numberText = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])



