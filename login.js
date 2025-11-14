import { createInterface, Readline } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = [
  {
    username: "ari",
    password: "1234",
  },
  {
    username: "admin",
    password: "12345",
  },
];

let attempts = 3;

async function check() {
  try {
    let isSuccess = false;
    while (attempts != 0 && isSuccess == false) {
      const username = await rl.question("Input username : ");
      const password = await rl.question("Input password : ");

      let obj = user.find((x) => x.username === username);

      if (obj != null || obj == undefined) {
        if (obj == undefined || obj.username != username) {
          console.log("Username salah");
          attempts--;
        } else if (obj == undefined || obj.password != password) {
          console.log("Password salah");
          attempts--;
        } else if (obj.username == username && obj.password == password) {
          isSuccess = true;
          return console.log("Selamat datang");
        }
        continue;
      }
    }
    console.log("Attempst running out");
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}

check();
