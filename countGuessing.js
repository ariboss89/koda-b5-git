import { createInterface, Readline } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function isNumber(input) {
//   const re = /^\d{1,}$/;
//   return re.test(input);
// }

async function inputNumber(number) {
  try {
    let count = 0;

    while (true) {
      const guessNumber = await rl.question("Input guessing number : ");

      //constguessNumber = 90;

      // if (!isNumber(guessNumber)) {
      //   throw new Error("Input harus berupa angka (1-100");
      // }

      // if (guessNumber > 100 || guessNumber < 1) {
      //   throw new Error("Input harus berupa angka (1-100");
      // }

      count++;
      if (guessNumber > number) {
        console.log("Tebakan terlalu besar");
      } else if (guessNumber < number) {
        console.log("Tebakan terlalu kecil");
      } else {
        console.log("Benar !!, Anda menghabiskan " + count + " tebakan");
        break;
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}

inputNumber(Math.floor(Math.random() * 100));
